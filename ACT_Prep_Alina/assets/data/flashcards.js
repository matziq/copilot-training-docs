window.ACT_DATA = window.ACT_DATA || {};
window.ACT_DATA.flashcards = [
  {
    id: "fc-001",
    deck: "Math Formulas",
    front: "Area of a circle",
    back: "<p>A = \u03c0r<sup>2</sup></p><p>Circumference is C = 2\u03c0r. The most common ACT trap is being given the diameter and forgetting to halve it before squaring.</p>",
    tag: "Circles"
  },
  {
    id: "fc-002",
    deck: "Math Formulas",
    front: "Circumference of a circle",
    back: "<p>C = 2\u03c0r = \u03c0d</p><p>Trap: mixing this up with area (\u03c0r<sup>2</sup>). Circumference uses r to the first power; area squares r.</p>",
    tag: "Circles"
  },
  {
    id: "fc-003",
    deck: "Math Formulas",
    front: "Area of a triangle",
    back: "<p>A = (1/2)bh</p><p>h is the perpendicular height, not a slanted side. Trap: using the length of a tilted edge instead of the true height dropped to the base.</p>",
    tag: "Area"
  },
  {
    id: "fc-004",
    deck: "Math Formulas",
    front: "Area of a rectangle and parallelogram",
    back: "<p>Rectangle: A = lw. Parallelogram: A = bh.</p><p>Trap: for a parallelogram, use the perpendicular height h, never the slanted side length.</p>",
    tag: "Area"
  },
  {
    id: "fc-005",
    deck: "Math Formulas",
    front: "Area of a trapezoid",
    back: "<p>A = (1/2)(b<sub>1</sub> + b<sub>2</sub>)h</p><p>Average the two parallel bases, then multiply by height. Trap: forgetting to average and just using one base.</p>",
    tag: "Area"
  },
  {
    id: "fc-006",
    deck: "Math Formulas",
    front: "Perimeter",
    back: "<p>Add all side lengths. Rectangle: P = 2(l + w).</p><p>Trap: confusing perimeter (distance around) with area (space inside). Perimeter uses addition, area uses multiplication.</p>",
    tag: "Perimeter"
  },
  {
    id: "fc-007",
    deck: "Math Formulas",
    front: "Pythagorean theorem",
    back: "<p>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>, where c is the hypotenuse (opposite the right angle).</p><p>Trap: applying it to a triangle that is not right-angled, or placing a leg where c belongs.</p>",
    tag: "Triangles"
  },
  {
    id: "fc-008",
    deck: "Math Formulas",
    front: "Common Pythagorean triples",
    back: "<p>3-4-5, 5-12-13, 8-15-17, 7-24-25.</p><p>Recognizing them saves time. Trap: not spotting multiples, such as 6-8-10 or 9-12-15, which are just scaled 3-4-5 triangles.</p>",
    tag: "Triangles"
  },
  {
    id: "fc-009",
    deck: "Math Formulas",
    front: "Volume of a rectangular prism",
    back: "<p>V = lwh</p><p>Trap: confusing volume (cubic units) with surface area (square units). Volume multiplies all three dimensions together.</p>",
    tag: "Volume"
  },
  {
    id: "fc-010",
    deck: "Math Formulas",
    front: "Volume of a cylinder",
    back: "<p>V = \u03c0r<sup>2</sup>h</p><p>It is the circular base area times height. Trap: plugging in the diameter for r instead of halving it first.</p>",
    tag: "Volume"
  },
  {
    id: "fc-011",
    deck: "Math Formulas",
    front: "Surface area of a rectangular prism",
    back: "<p>SA = 2(lw + lh + wh)</p><p>Trap: adding only three faces. A box has six faces in three matching pairs, so the whole sum is doubled.</p>",
    tag: "Surface area"
  },
  {
    id: "fc-012",
    deck: "Math Formulas",
    front: "Volume of a cone",
    back: "<p>V = (1/3)\u03c0r<sup>2</sup>h</p><p>A cone is one-third of the cylinder with the same base and height. Trap: forgetting the 1/3 and reporting the full cylinder volume.</p>",
    tag: "Volume"
  },
  {
    id: "fc-013",
    deck: "Math Formulas",
    front: "Volume and surface area of a sphere",
    back: "<p>V = (4/3)\u03c0r<sup>3</sup>; surface area = 4\u03c0r<sup>2</sup>.</p><p>Trap: swapping the exponents. Volume uses r<sup>3</sup> (cubic), surface area uses r<sup>2</sup> (square).</p>",
    tag: "Volume"
  },
  {
    id: "fc-014",
    deck: "Math Formulas",
    front: "Volume of a pyramid",
    back: "<p>V = (1/3) \u00d7 (base area) \u00d7 h</p><p>Like the cone, it is one-third of the matching prism. Trap: dropping the 1/3 factor.</p>",
    tag: "Volume"
  },
  {
    id: "fc-015",
    deck: "Math Formulas",
    front: "Slope formula",
    back: "<p>m = (y<sub>2</sub> \u2212 y<sub>1</sub>)/(x<sub>2</sub> \u2212 x<sub>1</sub>)</p><p>Rise over run. Trap: inverting it to run over rise, or subtracting the coordinates in a different order on top and bottom.</p>",
    tag: "Lines"
  },
  {
    id: "fc-016",
    deck: "Math Formulas",
    front: "Slope-intercept and point-slope forms",
    back: "<p>y = mx + b (b is the y-intercept); y \u2212 y<sub>1</sub> = m(x \u2212 x<sub>1</sub>).</p><p>Trap: reading b as the x-intercept, or dropping a sign on x<sub>1</sub> or y<sub>1</sub> in point-slope form.</p>",
    tag: "Lines"
  },
  {
    id: "fc-017",
    deck: "Math Formulas",
    front: "Standard form of a line",
    back: "<p>Ax + By = C, with slope = \u2212A/B.</p><p>Trap: reading the slope as A/B and forgetting the negative sign.</p>",
    tag: "Lines"
  },
  {
    id: "fc-018",
    deck: "Math Formulas",
    front: "Distance formula",
    back: "<p>d = \u221a((x<sub>2</sub> \u2212 x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> \u2212 y<sub>1</sub>)<sup>2</sup>)</p><p>It is the Pythagorean theorem in disguise. Trap: adding the differences before squaring, or forgetting the square root.</p>",
    tag: "Coordinate geometry"
  },
  {
    id: "fc-019",
    deck: "Math Formulas",
    front: "Midpoint formula",
    back: "<p>((x<sub>1</sub> + x<sub>2</sub>)/2, (y<sub>1</sub> + y<sub>2</sub>)/2)</p><p>Average each coordinate. Trap: subtracting the coordinates (that gives distance components, not the midpoint).</p>",
    tag: "Coordinate geometry"
  },
  {
    id: "fc-020",
    deck: "Math Formulas",
    front: "Equation of a circle",
    back: "<p>(x \u2212 h)<sup>2</sup> + (y \u2212 k)<sup>2</sup> = r<sup>2</sup>, center (h, k), radius r.</p><p>Trap: flipping the signs of the center, or using r instead of r<sup>2</sup> on the right side.</p>",
    tag: "Circles"
  },
  {
    id: "fc-021",
    deck: "Math Formulas",
    front: "Arc length and sector area",
    back: "<p>Arc length = (\u03b8/360) \u00d7 2\u03c0r; sector area = (\u03b8/360) \u00d7 \u03c0r<sup>2</sup>.</p><p>Both are fractions of a whole circle. Trap: using the circumference formula when the area of a sector is wanted, or vice versa.</p>",
    tag: "Circles"
  },
  {
    id: "fc-022",
    deck: "Math Formulas",
    front: "Quadratic formula",
    back: "<p>x = (\u2212b \u00b1 \u221a(b<sup>2</sup> \u2212 4ac))/(2a)</p><p>Trap: dropping the \u00b1 (which loses one root) or forgetting the leading \u2212b, especially when b is negative.</p>",
    tag: "Quadratics"
  },
  {
    id: "fc-023",
    deck: "Math Formulas",
    front: "The discriminant",
    back: "<p>b<sup>2</sup> \u2212 4ac. If > 0, two real roots; = 0, one; < 0, none.</p><p>Trap: reporting the discriminant's value as the answer when the question asks how many real solutions there are.</p>",
    tag: "Quadratics"
  },
  {
    id: "fc-024",
    deck: "Math Formulas",
    front: "Vertex form and axis of symmetry",
    back: "<p>y = a(x \u2212 h)<sup>2</sup> + k has vertex (h, k). For y = ax<sup>2</sup> + bx + c, the vertex x is \u2212b/(2a).</p><p>Trap: reading h with the wrong sign; x \u2212 3 gives h = +3.</p>",
    tag: "Quadratics"
  },
  {
    id: "fc-025",
    deck: "Math Formulas",
    front: "Sum and product of roots",
    back: "<p>For ax<sup>2</sup> + bx + c = 0: sum of roots = \u2212b/a, product = c/a.</p><p>Trap: forgetting the negative sign on the sum, or swapping which expression gives the sum versus the product.</p>",
    tag: "Quadratics"
  },
  {
    id: "fc-026",
    deck: "Math Formulas",
    front: "Exponent product and quotient rules",
    back: "<p>x<sup>a</sup> \u00b7 x<sup>b</sup> = x<sup>a+b</sup>; x<sup>a</sup>/x<sup>b</sup> = x<sup>a\u2212b</sup>.</p><p>Trap: multiplying the exponents when the bases are multiplied. You add when multiplying, subtract when dividing.</p>",
    tag: "Exponents"
  },
  {
    id: "fc-027",
    deck: "Math Formulas",
    front: "Power of a power and of a product",
    back: "<p>(x<sup>a</sup>)<sup>b</sup> = x<sup>ab</sup>; (xy)<sup>a</sup> = x<sup>a</sup>y<sup>a</sup>.</p><p>Trap: adding the exponents in (x<sup>a</sup>)<sup>b</sup>. A power of a power multiplies them.</p>",
    tag: "Exponents"
  },
  {
    id: "fc-028",
    deck: "Math Formulas",
    front: "Negative and zero exponents",
    back: "<p>x<sup>0</sup> = 1 (for x \u2260 0); x<sup>\u2212n</sup> = 1/x<sup>n</sup>.</p><p>Trap: treating a negative exponent as a negative number; 2<sup>\u22123</sup> = 1/8, not \u22128.</p>",
    tag: "Exponents"
  },
  {
    id: "fc-029",
    deck: "Math Formulas",
    front: "Fractional exponents",
    back: "<p>x<sup>m/n</sup> = <sup>n</sup>\u221a(x<sup>m</sup>) = (<sup>n</sup>\u221ax)<sup>m</sup>.</p><p>The denominator is the root, the numerator is the power. Trap: flipping them and taking the m-th root instead.</p>",
    tag: "Exponents"
  },
  {
    id: "fc-030",
    deck: "Math Formulas",
    front: "Radical rules",
    back: "<p>\u221a(ab) = \u221aa \u00b7 \u221ab and \u221a(a/b) = \u221aa/\u221ab.</p><p>Trap: \u221a(a + b) does NOT equal \u221aa + \u221ab. Radicals split over multiplication and division only, never over addition.</p>",
    tag: "Radicals"
  },
  {
    id: "fc-031",
    deck: "Math Formulas",
    front: "Logarithm definition",
    back: "<p>log<sub>b</sub>(x) = y means b<sup>y</sup> = x.</p><p>A log answers 'what exponent?'. Trap: reversing base and value, for example thinking log<sub>2</sub>(8) asks 2 to what makes... it equals 3 because 2<sup>3</sup> = 8.</p>",
    tag: "Logarithms"
  },
  {
    id: "fc-032",
    deck: "Math Formulas",
    front: "Logarithm rules",
    back: "<p>log(mn) = log m + log n; log(m/n) = log m \u2212 log n; log(m<sup>p</sup>) = p\u00b7log m.</p><p>Trap: turning log(mn) into (log m)(log n). A log of a product becomes a sum, not a product.</p>",
    tag: "Logarithms"
  },
  {
    id: "fc-033",
    deck: "Math Formulas",
    front: "SOH CAH TOA",
    back: "<p>sin = opp/hyp, cos = adj/hyp, tan = opp/adj.</p><p>Trap: swapping opposite and adjacent. The adjacent side touches the angle; the opposite side faces it across the triangle.</p>",
    tag: "Trigonometry"
  },
  {
    id: "fc-034",
    deck: "Math Formulas",
    front: "30-60-90 triangle",
    back: "<p>Sides are in ratio 1 : \u221a3 : 2 (short leg : long leg : hypotenuse).</p><p>The short leg faces 30\u00b0, the hypotenuse is twice it. Trap: attaching \u221a3 to the hypotenuse instead of the long leg.</p>",
    tag: "Special triangles"
  },
  {
    id: "fc-035",
    deck: "Math Formulas",
    front: "45-45-90 triangle",
    back: "<p>Sides are in ratio 1 : 1 : \u221a2; hypotenuse = leg \u00d7 \u221a2.</p><p>Trap: doubling the leg (that is the 30-60-90 rule). For 45-45-90 you multiply by \u221a2.</p>",
    tag: "Special triangles"
  },
  {
    id: "fc-036",
    deck: "Math Formulas",
    front: "Common unit-circle sines",
    back: "<p>sin 0\u00b0 = 0, sin 30\u00b0 = 1/2, sin 45\u00b0 = \u221a2/2, sin 60\u00b0 = \u221a3/2, sin 90\u00b0 = 1.</p><p>Trap: swapping sin 30\u00b0 and sin 60\u00b0. Sine grows as the angle grows from 0\u00b0 to 90\u00b0.</p>",
    tag: "Unit circle"
  },
  {
    id: "fc-037",
    deck: "Math Formulas",
    front: "Common unit-circle cosines",
    back: "<p>cos 0\u00b0 = 1, cos 30\u00b0 = \u221a3/2, cos 45\u00b0 = \u221a2/2, cos 60\u00b0 = 1/2, cos 90\u00b0 = 0.</p><p>Trap: cosine decreases as the angle grows from 0\u00b0 to 90\u00b0, the opposite of sine.</p>",
    tag: "Unit circle"
  },
  {
    id: "fc-038",
    deck: "Math Formulas",
    front: "Sine graph features",
    back: "<p>y = sin x starts at 0, has amplitude 1, range [\u22121, 1], and period 360\u00b0 (2\u03c0). In y = a\u00b7sin(bx), amplitude = |a| and period = 360\u00b0/b.</p><p>Trap: confusing amplitude (height) with period (length of one cycle).</p>",
    tag: "Trig graphs"
  },
  {
    id: "fc-039",
    deck: "Math Formulas",
    front: "Cosine graph features",
    back: "<p>y = cos x starts at its maximum (0, 1), with amplitude 1 and period 2\u03c0.</p><p>Trap: in y = a\u00b7cos(bx), the period comes from b (360\u00b0/b), not from a; a only sets the amplitude.</p>",
    tag: "Trig graphs"
  },
  {
    id: "fc-040",
    deck: "Math Formulas",
    front: "Law of Sines",
    back: "<p>a/sin A = b/sin B = c/sin C.</p><p>Use it when you have a matched angle-and-opposite-side pair. Trap: trying to apply it when you only know sides or only know angles with no pair.</p>",
    tag: "Trigonometry"
  },
  {
    id: "fc-041",
    deck: "Math Formulas",
    front: "Law of Cosines",
    back: "<p>c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> \u2212 2ab\u00b7cos C.</p><p>Use it with two sides and the included angle, or three sides. When C = 90\u00b0 it reduces to the Pythagorean theorem. Trap: dropping the minus sign on the 2ab term.</p>",
    tag: "Trigonometry"
  },
  {
    id: "fc-042",
    deck: "Math Formulas",
    front: "Arithmetic sequence",
    back: "<p>a<sub>n</sub> = a<sub>1</sub> + (n \u2212 1)d, where d is the common difference.</p><p>Trap: using n instead of (n \u2212 1); the first term already counts before any d is added.</p>",
    tag: "Sequences"
  },
  {
    id: "fc-043",
    deck: "Math Formulas",
    front: "Geometric sequence",
    back: "<p>a<sub>n</sub> = a<sub>1</sub> \u00b7 r<sup>(n\u22121)</sup>, where r is the common ratio.</p><p>Trap: using r<sup>n</sup> instead of r<sup>n\u22121</sup>; the first term is multiplied by r one fewer time than its position.</p>",
    tag: "Sequences"
  },
  {
    id: "fc-044",
    deck: "Math Formulas",
    front: "Permutations vs combinations",
    back: "<p>Permutations (order matters): P = n!/(n \u2212 r)!. Combinations (order does not): C = n!/(r!(n \u2212 r)!).</p><p>Trap: using permutations for a problem where arrangement does not matter, which overcounts.</p>",
    tag: "Counting"
  },
  {
    id: "fc-045",
    deck: "Math Formulas",
    front: "Probability rules",
    back: "<p>P = favorable/total. P(A or B) = P(A) + P(B) \u2212 P(A and B). For independent events, P(A and B) = P(A)\u00b7P(B).</p><p>Trap: adding probabilities for an 'and' of independent events instead of multiplying.</p>",
    tag: "Probability"
  },
  {
    id: "fc-046",
    deck: "Math Formulas",
    front: "Mean, median, mode, range",
    back: "<p>Mean = sum/count; median = middle value in order; mode = most frequent; range = max \u2212 min.</p><p>Trap: reporting the mean when the median is asked, especially when an outlier pulls the mean away from the center.</p>",
    tag: "Statistics"
  },
  {
    id: "fc-047",
    deck: "Math Formulas",
    front: "Simple vs compound interest",
    back: "<p>Simple: I = Prt. Compound: A = P(1 + r/n)<sup>nt</sup>.</p><p>Trap: using the simple formula when interest compounds. Compound interest earns interest on previously earned interest.</p>",
    tag: "Finance"
  },
  {
    id: "fc-048",
    deck: "Math Formulas",
    front: "Exponential growth and decay",
    back: "<p>Growth: y = a(1 + r)<sup>t</sup>. Decay: y = a(1 \u2212 r)<sup>t</sup>.</p><p>Trap: sign of r. Growth adds the rate inside the parentheses; decay subtracts it.</p>",
    tag: "Exponential models"
  },
  {
    id: "fc-049",
    deck: "Math Formulas",
    front: "Powers of i",
    back: "<p>i<sup>2</sup> = \u22121, i<sup>3</sup> = \u2212i, i<sup>4</sup> = 1, then the cycle repeats every 4.</p><p>Trap: thinking i<sup>2</sup> = 1. To simplify a high power, divide the exponent by 4 and use the remainder.</p>",
    tag: "Complex numbers"
  },
  {
    id: "fc-050",
    deck: "Math Formulas",
    front: "2\u00d72 matrix determinant",
    back: "<p>For [[a, b], [c, d]], det = ad \u2212 bc.</p><p>Multiply the main diagonal, then subtract the product of the other diagonal. Trap: adding instead of subtracting the second product.</p>",
    tag: "Matrices"
  },
  {
    id: "fc-051",
    deck: "Math Formulas",
    front: "Vector addition",
    back: "<p>Add components: \u27e8a, b\u27e9 + \u27e8c, d\u27e9 = \u27e8a + c, b + d\u27e9. Magnitude = \u221a(x<sup>2</sup> + y<sup>2</sup>).</p><p>Trap: adding magnitudes directly instead of adding components first, then finding the new magnitude.</p>",
    tag: "Vectors"
  },
  {
    id: "fc-052",
    deck: "Math Formulas",
    front: "Percent change",
    back: "<p>% change = ((new \u2212 old)/old) \u00d7 100.</p><p>Trap: dividing by the new value instead of the original. The base of a percent change is always the starting amount.</p>",
    tag: "Percents"
  },
  {
    id: "fc-053",
    deck: "Math Formulas",
    front: "Direct and inverse variation",
    back: "<p>Direct: y = kx (y/x is constant). Inverse: y = k/x (xy is constant).</p><p>Trap: mixing them up. In direct variation both grow together; in inverse variation one rises as the other falls.</p>",
    tag: "Variation"
  },
  {
    id: "fc-054",
    deck: "Math Formulas",
    front: "Sum of interior angles of a polygon",
    back: "<p>Sum = (n \u2212 2) \u00d7 180\u00b0. Each angle of a regular polygon = (n \u2212 2) \u00d7 180\u00b0 / n.</p><p>Trap: the exterior angles always sum to 360\u00b0 regardless of n; do not confuse that with the interior sum.</p>",
    tag: "Polygons"
  },
  {
    id: "fc-055",
    deck: "Math Formulas",
    front: "Similar-figure area and volume scaling",
    back: "<p>If lengths scale by k, areas scale by k<sup>2</sup> and volumes by k<sup>3</sup>.</p><p>Trap: scaling area or volume by the same k as length. Doubling the sides multiplies area by 4 and volume by 8.</p>",
    tag: "Similarity"
  },
  {
    id: "fc-056",
    deck: "English Rules",
    front: "Comma splice",
    back: "<p>A comma splice joins two complete sentences with only a comma: \"It rained, we left.\"</p><p>Fix with a period, a semicolon, or a comma plus a conjunction (and, but, so). Trap: the ACT offers the uncorrected splice as NO CHANGE.</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-057",
    deck: "English Rules",
    front: "The four comma jobs",
    back: "<p>Commas (1) follow introductory elements, (2) separate items in a series, (3) join two independent clauses before a FANBOYS conjunction, and (4) set off nonessential information.</p><p>If a comma does none of these four jobs, the ACT usually wants it deleted.</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-058",
    deck: "English Rules",
    front: "Introductory-element comma",
    back: "<p>Put a comma after an introductory word, phrase, or dependent clause: \"After the game, we ate.\"</p><p>Trap: no comma is needed if the sentence opens directly with its subject (\"We ate after the game\").</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-059",
    deck: "English Rules",
    front: "Series comma",
    back: "<p>Separate three or more items with commas: \"red, white, and blue.\"</p><p>Trap: do not put a comma before the first item or after the last; only between items.</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-060",
    deck: "English Rules",
    front: "Comma before a conjunction joining two sentences",
    back: "<p>Use a comma before FANBOYS (for, and, nor, but, or, yet, so) only when both sides are complete sentences.</p><p>Trap: adding a comma when the second part is not independent (\"She sang and danced\" needs no comma).</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-061",
    deck: "English Rules",
    front: "Nonessential-information commas",
    back: "<p>Surround nonessential (removable) information with commas: \"My brother, a nurse, works nights.\"</p><p>Trap: if the phrase is essential to identify the noun, use no commas. Test by deleting it; if meaning survives, comma it off.</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-062",
    deck: "English Rules",
    front: "Semicolon rule",
    back: "<p>A semicolon joins two independent clauses (each a full sentence): \"I studied; I passed.\"</p><p>It also separates list items that already contain commas. Trap: a semicolon cannot attach a fragment; both sides must stand alone.</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-063",
    deck: "English Rules",
    front: "Colon rule",
    back: "<p>A colon follows a complete sentence and introduces a list, explanation, or example: \"She packed one thing: courage.\"</p><p>Trap: no colon after a verb or preposition, as in \"such as\" or \"including.\"</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-064",
    deck: "English Rules",
    front: "Dashes",
    back: "<p>A pair of dashes sets off an interruption; a single dash adds emphasis at the end: \"He had one goal \u2014 victory.\"</p><p>Trap: an opening dash must be matched by a closing dash, not by a comma.</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-065",
    deck: "English Rules",
    front: "Apostrophes: possession vs plural",
    back: "<p>Singular possessive: dog's. Plural possessive: dogs'. Plain plural: dogs (no apostrophe).</p><p>Trap: adding an apostrophe to make a simple plural. Apostrophes show possession or contraction, never plurality.</p>",
    tag: "Punctuation"
  },
  {
    id: "fc-066",
    deck: "English Rules",
    front: "Its vs it's",
    back: "<p>\"Its\" is possessive (the dog wagged its tail). \"It's\" is the contraction for it is or it has.</p><p>Trap: if you can substitute \"it is,\" use it's; otherwise use its. Possessive its has no apostrophe.</p>",
    tag: "Usage"
  },
  {
    id: "fc-067",
    deck: "English Rules",
    front: "Who vs whom",
    back: "<p>\"Who\" is the subject (who called?); \"whom\" is the object (to whom did you speak?).</p><p>Trick: answer with he/him. If \"he\" fits, use who; if \"him\" fits, use whom (both end in m).</p>",
    tag: "Pronouns"
  },
  {
    id: "fc-068",
    deck: "English Rules",
    front: "Agreement across prepositional phrases",
    back: "<p>The verb agrees with the subject, not with a noun in a phrase between them: \"The box of nails is heavy.\"</p><p>Trap: matching the verb to the nearest noun (nails) instead of the true subject (box).</p>",
    tag: "Agreement"
  },
  {
    id: "fc-069",
    deck: "English Rules",
    front: "Indefinite pronouns are singular",
    back: "<p>Each, either, neither, everyone, everybody, anyone, and none (of) take singular verbs: \"Each of the players is ready.\"</p><p>Trap: the plural object of the following phrase (players) tempts a plural verb.</p>",
    tag: "Agreement"
  },
  {
    id: "fc-070",
    deck: "English Rules",
    front: "Neither/nor and compound subjects",
    back: "<p>With \"either...or\" or \"neither...nor,\" the verb agrees with the nearer subject. \"And\" makes a compound subject plural.</p><p>Trap: \"Neither the coach nor the players were ready\" is correct because players is closer.</p>",
    tag: "Agreement"
  },
  {
    id: "fc-071",
    deck: "English Rules",
    front: "Pronoun-antecedent agreement",
    back: "<p>A pronoun must match its antecedent in number: a singular noun takes a singular pronoun.</p><p>Trap: \"A student ... their\" mismatches. Use \"his or her,\" or make the noun plural (\"students ... their\").</p>",
    tag: "Pronouns"
  },
  {
    id: "fc-072",
    deck: "English Rules",
    front: "Pronoun case",
    back: "<p>Subjects use I, he, she, we, they; objects use me, him, her, us, them.</p><p>Trap: \"between you and I\" is wrong; after a preposition use \"me.\" Test by dropping the other name: \"between ... me.\"</p>",
    tag: "Pronouns"
  },
  {
    id: "fc-073",
    deck: "English Rules",
    front: "Verb tense consistency",
    back: "<p>Keep verbs in the same time frame unless the sentence signals a shift. Time words (yesterday, now, next year) set the tense.</p><p>Trap: drifting between past and present within one sentence for no reason.</p>",
    tag: "Verbs"
  },
  {
    id: "fc-074",
    deck: "English Rules",
    front: "Parallelism",
    back: "<p>Items in a list or comparison must share grammatical form: \"hiking, swimming, and biking.\"</p><p>Trap: mixing an infinitive into a list of gerunds (\"...and to bike\") breaks the parallel structure.</p>",
    tag: "Structure"
  },
  {
    id: "fc-075",
    deck: "English Rules",
    front: "Dangling modifiers",
    back: "<p>An opening descriptive phrase must modify the noun right after the comma: \"Walking home, she saw the moon.\"</p><p>Trap: \"Walking home, the moon appeared\" makes the moon do the walking. Put the correct doer next.</p>",
    tag: "Modifiers"
  },
  {
    id: "fc-076",
    deck: "English Rules",
    front: "Misplaced modifiers",
    back: "<p>Place a modifier next to the word it describes: \"She almost drove for six hours\" differs from \"She drove for almost six hours.\"</p><p>Trap: words like only, almost, and just change meaning depending on placement.</p>",
    tag: "Modifiers"
  },
  {
    id: "fc-077",
    deck: "English Rules",
    front: "Sentence fragments",
    back: "<p>A complete sentence needs a subject and a verb and must express a full thought. \"Because it rained\" is a fragment.</p><p>Trap: a dependent clause (starting with because, although, since) left alone; attach it to a main clause.</p>",
    tag: "Structure"
  },
  {
    id: "fc-078",
    deck: "English Rules",
    front: "Run-on / fused sentences",
    back: "<p>A run-on jams two sentences with no punctuation: \"I ran I was late.\"</p><p>Fix with a period, semicolon, or comma-plus-conjunction. Trap: the ACT hides run-ons where the second clause looks like a continuation.</p>",
    tag: "Structure"
  },
  {
    id: "fc-079",
    deck: "English Rules",
    front: "Than vs then",
    back: "<p>\"Than\" compares (taller than); \"then\" refers to time or sequence (first this, then that).</p><p>Trap: they sound alike, so check whether a comparison or a time order is meant.</p>",
    tag: "Usage"
  },
  {
    id: "fc-080",
    deck: "English Rules",
    front: "Affect vs effect",
    back: "<p>\"Affect\" is usually a verb (to influence); \"effect\" is usually a noun (a result).</p><p>Trap: \"The rain affected the game; its effect was a delay.\" If you can say \"an effect,\" it is the noun.</p>",
    tag: "Usage"
  },
  {
    id: "fc-081",
    deck: "English Rules",
    front: "Fewer vs less",
    back: "<p>\"Fewer\" is for countable items (fewer cars); \"less\" is for uncountable amounts (less water).</p><p>Trap: \"less cars\" is wrong. If you can count the noun with a number, use fewer.</p>",
    tag: "Usage"
  },
  {
    id: "fc-082",
    deck: "English Rules",
    front: "Between vs among",
    back: "<p>\"Between\" is for two things or one-to-one relationships; \"among\" is for three or more as a group.</p><p>Trap: \"among you and me\" is wrong; two people take between.</p>",
    tag: "Usage"
  },
  {
    id: "fc-083",
    deck: "English Rules",
    front: "The ACT concision principle",
    back: "<p>When answer choices are all grammatically correct, the shortest one that keeps the meaning is usually right.</p><p>Trap: choosing a longer, wordier option that repeats an idea already stated. Cut redundancy.</p>",
    tag: "Rhetoric"
  },
  {
    id: "fc-084",
    deck: "English Rules",
    front: "Redundancy patterns to cut",
    back: "<p>Watch for doubled meanings: \"each and every,\" \"past history,\" \"free gift,\" \"in my opinion I think.\"</p><p>Trap: both words are correct alone, but together they repeat. Keep one, delete the other.</p>",
    tag: "Rhetoric"
  },
  {
    id: "fc-085",
    deck: "English Rules",
    front: "Transitions: contrast",
    back: "<p>However, but, yet, nevertheless, on the other hand, in contrast, although.</p><p>Use when the second idea opposes the first. Trap: a contrast word where the ideas actually agree signals the wrong logical relationship.</p>",
    tag: "Transitions"
  },
  {
    id: "fc-086",
    deck: "English Rules",
    front: "Transitions: cause and effect",
    back: "<p>Therefore, thus, so, as a result, consequently, because.</p><p>Use when the second idea results from the first. Trap: pairing a result word with ideas that merely add to, but do not cause, each other.</p>",
    tag: "Transitions"
  },
  {
    id: "fc-087",
    deck: "English Rules",
    front: "Transitions: continuation / addition",
    back: "<p>Moreover, furthermore, in addition, also, likewise.</p><p>Use when the second idea extends the first in the same direction. Trap: using an addition word where a contrast is needed.</p>",
    tag: "Transitions"
  },
  {
    id: "fc-088",
    deck: "English Rules",
    front: "Transitions: example",
    back: "<p>For example, for instance, such as, to illustrate.</p><p>Use when a specific case supports a general statement. Trap: choosing a contrast or result word when the sentence simply gives an example.</p>",
    tag: "Transitions"
  },
  {
    id: "fc-089",
    deck: "English Rules",
    front: "Transitions: sequence / time",
    back: "<p>First, next, then, meanwhile, finally, afterward.</p><p>Use to order events in time. Trap: a sequence word that contradicts the actual order given in the passage.</p>",
    tag: "Transitions"
  },
  {
    id: "fc-090",
    deck: "English Rules",
    front: "\"Which choice best...\" questions",
    back: "<p>Read exactly what is asked: most specific, most vivid, or best supports a stated point. Answer only that goal.</p><p>Trap: picking a fancy-sounding choice that ignores the specific quality the question requests.</p>",
    tag: "Strategy"
  },
  {
    id: "fc-091",
    deck: "English Rules",
    front: "Essay-goal (yes/no) questions",
    back: "<p>\"Would this addition accomplish X?\" First decide yes or no, then match the reason. Eliminate the two answers with the wrong yes/no.</p><p>Trap: correct yes/no but a reason that misstates what the sentence does.</p>",
    tag: "Strategy"
  },
  {
    id: "fc-092",
    deck: "English Rules",
    front: "Add / delete a sentence questions",
    back: "<p>Keep a sentence only if it is relevant and on topic; delete it if it repeats, digresses, or interrupts.</p><p>Trap: keeping an interesting but off-topic sentence. Relevance to the paragraph's focus decides.</p>",
    tag: "Strategy"
  },
  {
    id: "fc-093",
    deck: "English Rules",
    front: "Sentence / paragraph order questions",
    back: "<p>Use logical clues: pronouns, dates, transitions, and 'this/that' references must have something to point back to.</p><p>Trap: placing a sentence before the noun its pronoun refers to. Follow the chain of references.</p>",
    tag: "Strategy"
  },
  {
    id: "fc-094",
    deck: "English Rules",
    front: "There / their / they're",
    back: "<p>\"There\" = place; \"their\" = possessive; \"they're\" = they are.</p><p>Trap: they sound identical. Test by expanding to \"they are\"; if it fits, use they're.</p>",
    tag: "Usage"
  },
  {
    id: "fc-095",
    deck: "English Rules",
    front: "Verb agreement in inverted sentences",
    back: "<p>In \"there is / there are\" and other inverted sentences, the verb agrees with the true subject that follows it: \"There are three reasons.\"</p><p>Trap: defaulting to singular \"there is\" when the following subject is plural.</p>",
    tag: "Agreement"
  },
  {
    id: "fc-096",
    deck: "Science Skills",
    front: "Independent vs dependent variable",
    back: "<p>The independent variable is what the experimenter changes on purpose; the dependent variable is what is measured in response.</p><p>Trap: on a graph the independent variable is on the x-axis, the dependent on the y-axis \u2014 do not reverse them.</p>",
    tag: "Design"
  },
  {
    id: "fc-097",
    deck: "Science Skills",
    front: "Controls and controlled variables",
    back: "<p>A control group receives no treatment as a baseline; controlled variables are the factors kept constant so only one thing changes.</p><p>Trap: an experiment that changes two things at once cannot show which caused the result.</p>",
    tag: "Design"
  },
  {
    id: "fc-098",
    deck: "Science Skills",
    front: "Direct vs inverse relationships",
    back: "<p>Direct: as one variable rises, the other rises. Inverse: as one rises, the other falls.</p><p>Trap: read the table's trend, not your expectation. A line sloping down on the graph is an inverse relationship.</p>",
    tag: "Data"
  },
  {
    id: "fc-099",
    deck: "Science Skills",
    front: "Interpolation vs extrapolation",
    back: "<p>Interpolation estimates a value between measured data points; extrapolation predicts beyond them.</p><p>Trap: extrapolation is less reliable \u2014 a trend may level off or reverse outside the tested range.</p>",
    tag: "Data"
  },
  {
    id: "fc-100",
    deck: "Science Skills",
    front: "Data Representation passages",
    back: "<p>These give graphs and tables with few words. Go straight to the figures and read axis labels and units first.</p><p>Trap: rushing past the units or the legend, which is where most 'reading' errors on these questions happen.</p>",
    tag: "Passage types"
  },
  {
    id: "fc-101",
    deck: "Science Skills",
    front: "Research Summaries passages",
    back: "<p>These describe several experiments. Focus on what changed between experiments and why each was run.</p><p>Trap: questions often ask how the studies differ in method, so track the purpose of each experiment, not just the results.</p>",
    tag: "Passage types"
  },
  {
    id: "fc-102",
    deck: "Science Skills",
    front: "Conflicting Viewpoints passages",
    back: "<p>Two or more scientists give competing explanations. Note each one's main claim and the evidence it relies on.</p><p>Trap: mixing up whose view is whose. Jot a two-word label for each scientist before answering.</p>",
    tag: "Passage types"
  },
  {
    id: "fc-103",
    deck: "Science Skills",
    front: "Reading a semi-log axis",
    back: "<p>On a log axis each equal step multiplies by 10 (1, 10, 100, 1000), so gridlines are unevenly spaced.</p><p>Trap: reading a log axis as if it were linear badly underestimates large values.</p>",
    tag: "Data"
  },
  {
    id: "fc-104",
    deck: "Science Skills",
    front: "Units and scale traps",
    back: "<p>Always check units and axis scales before comparing numbers. Watch for kPa vs Pa, mL vs L, or a y-axis that does not start at zero.</p><p>Trap: an axis starting above zero exaggerates how big a difference looks.</p>",
    tag: "Data"
  },
  {
    id: "fc-105",
    deck: "Science Skills",
    front: "Density",
    back: "<p>Density = mass/volume, often in g/mL or g/cm<sup>3</sup>. An object floats if it is less dense than the fluid.</p><p>Trap: assuming heavier objects always sink; density, not weight alone, determines floating.</p>",
    tag: "Physical science"
  },
  {
    id: "fc-106",
    deck: "Science Skills",
    front: "The pH scale",
    back: "<p>pH runs 0\u201314: below 7 is acidic, 7 is neutral, above 7 is basic. It is logarithmic, so each unit is a 10\u00d7 change in acidity.</p><p>Trap: thinking pH 4 is twice as acidic as pH 5; it is ten times as acidic.</p>",
    tag: "Chemistry"
  },
  {
    id: "fc-107",
    deck: "Science Skills",
    front: "Photosynthesis basics",
    back: "<p>Plants use carbon dioxide, water, and light energy to make glucose and release oxygen. It occurs in chloroplasts.</p><p>Trap: reversing inputs and outputs. Photosynthesis takes in CO<sub>2</sub> and gives off O<sub>2</sub>.</p>",
    tag: "Biology"
  },
  {
    id: "fc-108",
    deck: "Science Skills",
    front: "Cellular respiration basics",
    back: "<p>Cells break down glucose using oxygen to release energy (ATP), producing carbon dioxide and water. It occurs in mitochondria.</p><p>Trap: it is essentially the reverse of photosynthesis; do not confuse their inputs and outputs.</p>",
    tag: "Biology"
  },
  {
    id: "fc-109",
    deck: "Science Skills",
    front: "States of matter and phase changes",
    back: "<p>Solid \u2192 liquid (melting), liquid \u2192 gas (vaporizing), and the reverses (freezing, condensing). Adding heat generally moves toward gas.</p><p>Trap: temperature stays constant during a phase change even as heat is added.</p>",
    tag: "Chemistry"
  },
  {
    id: "fc-110",
    deck: "Science Skills",
    front: "Newton's first law",
    back: "<p>An object stays at rest or in constant motion unless acted on by a net force (inertia).</p><p>Trap: assuming a moving object needs a continuous force to keep moving; it only needs one to change its motion.</p>",
    tag: "Physics"
  },
  {
    id: "fc-111",
    deck: "Science Skills",
    front: "Newton's second law",
    back: "<p>F = ma: net force equals mass times acceleration.</p><p>Trap: for a fixed force, a larger mass gives a smaller acceleration \u2014 the two are inversely related.</p>",
    tag: "Physics"
  },
  {
    id: "fc-112",
    deck: "Science Skills",
    front: "Newton's third law",
    back: "<p>For every action there is an equal and opposite reaction; forces come in pairs.</p><p>Trap: the paired forces act on different objects, so they do not cancel each other out.</p>",
    tag: "Physics"
  },
  {
    id: "fc-113",
    deck: "Science Skills",
    front: "Electromagnetic spectrum order",
    back: "<p>From longest wavelength to shortest: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.</p><p>Trap: shorter wavelength means higher frequency and higher energy \u2014 gamma rays carry the most energy.</p>",
    tag: "Physics"
  },
  {
    id: "fc-114",
    deck: "Science Skills",
    front: "Cell organelle basics",
    back: "<p>Nucleus stores DNA; mitochondria make energy; chloroplasts do photosynthesis; ribosomes build proteins; the cell membrane controls what enters and leaves.</p><p>Trap: only plant cells have chloroplasts and a rigid cell wall.</p>",
    tag: "Biology"
  },
  {
    id: "fc-115",
    deck: "Science Skills",
    front: "Outside-knowledge facts the ACT reuses",
    back: "<p>Water freezes at 0\u00b0C and boils at 100\u00b0C; a neutral pH is 7; DNA carries genetic information; gas solubility drops as temperature rises.</p><p>Trap: most Science questions need only the data, but a few reward these basic recalled facts.</p>",
    tag: "Core facts"
  },
  {
    id: "fc-116",
    deck: "Science Skills",
    front: "Reading a trend or best-fit line",
    back: "<p>Look at overall direction (up, down, flat) and whether it is linear or curved. Use the line, not scattered points, to predict.</p><p>Trap: over-focusing on one outlier instead of the general trend the question asks about.</p>",
    tag: "Data"
  },
  {
    id: "fc-117",
    deck: "Science Skills",
    front: "What would strengthen or weaken a result",
    back: "<p>A result is stronger when tested across more conditions with controls; it weakens if another variable could explain the outcome.</p><p>Trap: choosing an answer that adds information but does not actually test the stated hypothesis.</p>",
    tag: "Design"
  },
  {
    id: "fc-118",
    deck: "Science Skills",
    front: "Temperature and gas solubility",
    back: "<p>Gases dissolve less in warmer liquids; solids usually dissolve more as temperature rises.</p><p>Trap: assuming all substances dissolve better when heated \u2014 gases behave the opposite way, a favorite ACT point.</p>",
    tag: "Chemistry"
  },
  {
    id: "fc-119",
    deck: "Science Skills",
    front: "Why ice floats",
    back: "<p>Water is unusual: solid ice is less dense than liquid water, so ice floats.</p><p>Trap: expecting the solid form to be denser, as it is for most substances. Water expands when it freezes.</p>",
    tag: "Chemistry"
  },
  {
    id: "fc-120",
    deck: "Science Skills",
    front: "Hypothesis and the scientific method",
    back: "<p>A hypothesis is a testable, falsifiable prediction. An experiment supports or contradicts it; it never 'proves' it absolutely.</p><p>Trap: choosing an answer that claims a single study 'proves' a claim beyond doubt.</p>",
    tag: "Design"
  },
  {
    id: "fc-121",
    deck: "Reading & Writing Strategy",
    front: "The four Reading passage types and their order",
    back: "<p>ACT Reading follows a fixed order: Literary Narrative/Prose Fiction, Social Science, Humanities, then Natural Science.</p><p>Trap: forgetting that one passage is split into a paired set. Knowing the order lets you start with your strongest type.</p>",
    tag: "Reading"
  },
  {
    id: "fc-122",
    deck: "Reading & Writing Strategy",
    front: "Attacking a paired passage",
    back: "<p>Read Passage A and answer its questions, then read Passage B and answer its questions, and finally tackle the comparison questions.</p><p>Trap: reading both passages at once blurs which author said what; keep their claims separate.</p>",
    tag: "Reading"
  },
  {
    id: "fc-123",
    deck: "Reading & Writing Strategy",
    front: "Wrong-answer type: too extreme",
    back: "<p>Choices with absolute words \u2014 always, never, all, none, impossible \u2014 are usually wrong on Reading.</p><p>Trap: an extreme answer often restates the passage but overstates its certainty. Prefer measured wording.</p>",
    tag: "Wrong answers"
  },
  {
    id: "fc-124",
    deck: "Reading & Writing Strategy",
    front: "Wrong-answer type: wrong paragraph",
    back: "<p>The choice is a true statement from the passage but comes from a different part than the question asks about.</p><p>Trap: it feels familiar because you read it, but it does not answer this specific question. Reread the cited lines.</p>",
    tag: "Wrong answers"
  },
  {
    id: "fc-125",
    deck: "Reading & Writing Strategy",
    front: "Wrong-answer type: distortion",
    back: "<p>The choice twists a detail \u2014 swapping cause and effect, changing who did what, or altering a number.</p><p>Trap: it uses the passage's exact words but rearranges their meaning. Check that the relationship is accurate.</p>",
    tag: "Wrong answers"
  },
  {
    id: "fc-126",
    deck: "Reading & Writing Strategy",
    front: "Wrong-answer type: half-right",
    back: "<p>The first half matches the passage but the second half adds a false claim (or the reverse).</p><p>Trap: stopping after the accurate part. Read the entire choice; one wrong word makes the whole answer wrong.</p>",
    tag: "Wrong answers"
  },
  {
    id: "fc-127",
    deck: "Reading & Writing Strategy",
    front: "Wrong-answer type: out of scope",
    back: "<p>The choice raises an idea the passage never discusses, even if it sounds reasonable.</p><p>Trap: bringing in outside knowledge or logic. If you cannot point to support in the text, eliminate it.</p>",
    tag: "Wrong answers"
  },
  {
    id: "fc-128",
    deck: "Reading & Writing Strategy",
    front: "Vocabulary-in-context method",
    back: "<p>Cover the word, read the sentence, and predict a simple replacement from context; then match it to a choice.</p><p>Trap: the tested word often has a common meaning that does not fit here; the ACT rewards the secondary meaning.</p>",
    tag: "Reading"
  },
  {
    id: "fc-129",
    deck: "Reading & Writing Strategy",
    front: "Tone words",
    back: "<p>Sort tone into positive, negative, or neutral, then refine (admiring, critical, nostalgic, skeptical, objective).</p><p>Trap: choosing an emotionally strong tone for a calm, informative passage. Most Natural Science tone is neutral.</p>",
    tag: "Reading"
  },
  {
    id: "fc-130",
    deck: "Reading & Writing Strategy",
    front: "Main idea vs detail questions",
    back: "<p>Main-idea answers must cover the whole passage, not one paragraph; detail answers must point to a specific line.</p><p>Trap: picking a true but narrow detail as the main idea, or a broad theme for a specific detail question.</p>",
    tag: "Reading"
  },
  {
    id: "fc-131",
    deck: "Reading & Writing Strategy",
    front: "Function / purpose questions",
    back: "<p>\"The author mentions X in order to...\" asks why a detail is there, not what it says.</p><p>Trap: choosing an answer that merely restates the detail instead of explaining its role in the argument.</p>",
    tag: "Reading"
  },
  {
    id: "fc-132",
    deck: "Reading & Writing Strategy",
    front: "Paragraph-reference approach",
    back: "<p>When a question names a paragraph, read a sentence before and after the cited spot for context, then answer in your own words first.</p><p>Trap: answering from memory of the whole passage instead of rereading the exact referenced section.</p>",
    tag: "Reading"
  },
  {
    id: "fc-133",
    deck: "Reading & Writing Strategy",
    front: "Essay domain: Ideas & Analysis",
    back: "<p>Scores your thesis and how well you analyze the issue and the given perspectives.</p><p>Trap: only stating an opinion. High scores engage the tensions between perspectives and show why your view holds.</p>",
    tag: "Writing"
  },
  {
    id: "fc-134",
    deck: "Reading & Writing Strategy",
    front: "Essay domain: Development & Support",
    back: "<p>Scores your reasoning and examples. Each claim should be backed by specific, logical support.</p><p>Trap: listing examples without explaining how they prove your point. Depth beats a pile of shallow reasons.</p>",
    tag: "Writing"
  },
  {
    id: "fc-135",
    deck: "Reading & Writing Strategy",
    front: "Essay domain: Organization",
    back: "<p>Scores structure and flow: a clear thesis, logical paragraph order, and transitions between ideas.</p><p>Trap: strong ideas buried in a shapeless essay. Use a plan so each paragraph has one clear job.</p>",
    tag: "Writing"
  },
  {
    id: "fc-136",
    deck: "Reading & Writing Strategy",
    front: "Essay domain: Language Use",
    back: "<p>Scores grammar, word choice, sentence variety, and tone.</p><p>Trap: overreaching with big words used incorrectly. Clear, correct, varied sentences score higher than fancy errors.</p>",
    tag: "Writing"
  },
  {
    id: "fc-137",
    deck: "Reading & Writing Strategy",
    front: "What separates a 4 from a 5",
    back: "<p>A 4 states a position and gives support; a 5 shows nuance \u2014 it weighs the perspectives against each other and qualifies its own claims.</p><p>Trap: settling for a competent one-sided essay. Complexity and precise analysis lift the score.</p>",
    tag: "Writing"
  },
  {
    id: "fc-138",
    deck: "Reading & Writing Strategy",
    front: "Essay structure template",
    back: "<p>Intro with thesis, one paragraph engaging each given perspective (relating each to your view), and a short conclusion.</p><p>Trap: describing all three perspectives without ever committing to and defending your own position.</p>",
    tag: "Writing"
  },
  {
    id: "fc-139",
    deck: "Reading & Writing Strategy",
    front: "Handling the three given perspectives",
    back: "<p>Address all three: agree, disagree, or partly both, and explain why. Your thesis can side with one, blend them, or offer a fourth view.</p><p>Trap: ignoring the perspectives entirely; the prompt requires you to engage them directly.</p>",
    tag: "Writing"
  },
  {
    id: "fc-140",
    deck: "Reading & Writing Strategy",
    front: "Essay introduction and thesis",
    back: "<p>Briefly frame the debate, then state a clear, specific thesis that takes a position.</p><p>Trap: a vague thesis like 'there are many sides.' Graders reward a definite, arguable claim stated up front.</p>",
    tag: "Writing"
  },
  {
    id: "fc-141",
    deck: "Reading & Writing Strategy",
    front: "Essay evidence and examples",
    back: "<p>Use specific examples \u2014 history, current events, science, or personal experience \u2014 and tie each explicitly to your claim.</p><p>Trap: an example left to 'speak for itself.' Always explain how it supports your point.</p>",
    tag: "Writing"
  },
  {
    id: "fc-142",
    deck: "Reading & Writing Strategy",
    front: "Essay conclusion",
    back: "<p>Restate your position in fresh words and leave a final thought about why the issue matters.</p><p>Trap: introducing a brand-new argument in the conclusion. Save development for the body paragraphs.</p>",
    tag: "Writing"
  },
  {
    id: "fc-143",
    deck: "Reading & Writing Strategy",
    front: "Pacing: English",
    back: "<p>50 questions in 35 minutes is about 42 seconds each, roughly 7 minutes per passage.</p><p>Trap: overthinking punctuation. Most English answers are quick; bank time here for the slower Math section.</p>",
    tag: "Pacing"
  },
  {
    id: "fc-144",
    deck: "Reading & Writing Strategy",
    front: "Pacing: Math",
    back: "<p>45 questions in 50 minutes is about 66 seconds each. Early questions are easier and faster; later ones take longer.</p><p>Trap: sinking three minutes into one hard problem. Flag it, move on, and return if time allows.</p>",
    tag: "Pacing"
  },
  {
    id: "fc-145",
    deck: "Reading & Writing Strategy",
    front: "Pacing: Reading",
    back: "<p>36 questions in 40 minutes across 4 passages is about 10 minutes per passage, roughly 40 seconds a question.</p><p>Trap: reading too slowly for detail. Skim for structure, then dig into the lines each question cites.</p>",
    tag: "Pacing"
  },
  {
    id: "fc-146",
    deck: "Reading & Writing Strategy",
    front: "Pacing: Science",
    back: "<p>40 questions in 40 minutes is about 60 seconds each, roughly 6\u20137 minutes per passage.</p><p>Trap: over-reading the intro. Jump to the figures first and save the dense text for questions that require it.</p>",
    tag: "Pacing"
  },
  {
    id: "fc-147",
    deck: "Reading & Writing Strategy",
    front: "Reading order-of-attack",
    back: "<p>You may do passages in any order. Start with the type you handle best to lock in points before fatigue sets in.</p><p>Trap: always taking passages in the printed order even when your strongest type comes last.</p>",
    tag: "Strategy"
  },
  {
    id: "fc-148",
    deck: "Reading & Writing Strategy",
    front: "No-penalty guessing",
    back: "<p>The ACT does not deduct for wrong answers, so never leave a blank. Fill in every question.</p><p>Trap: running out of time with blanks. In the last minute, bubble a single 'letter of the day' for all remaining items.</p>",
    tag: "Strategy"
  },
  {
    id: "fc-149",
    deck: "Reading & Writing Strategy",
    front: "Evidence-pairing questions",
    back: "<p>Some questions ask which lines best support a previous answer. Your two answers must agree \u2014 the evidence must actually prove your claim.</p><p>Trap: picking a quote that is on topic but does not specifically support the answer you chose.</p>",
    tag: "Reading"
  },
  {
    id: "fc-150",
    deck: "Reading & Writing Strategy",
    front: "Bubbling and time management",
    back: "<p>Answer in the booklet in blocks, then transfer bubbles a page at a time to save seconds and reduce slips.</p><p>Trap: a single skipped bubble can misalign a whole column; check your number matches the question every page.</p>",
    tag: "Strategy"
  }
];