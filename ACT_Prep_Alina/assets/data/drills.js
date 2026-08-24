window.ACT_DATA = window.ACT_DATA || {};
window.ACT_DATA.drills = [
  {
    id: "math-linear",
    section: "Math",
    title: "Linear Equations & Inequalities",
    blurb: "Solve one-variable equations and inequalities cleanly \u2014 the backbone skill under a third of ACT Math questions.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "If 3(x \u2212 4) = 2x + 5, what is the value of x ?",
        choices: ["\u22127", "1", "9", "17"],
        answer: 3,
        topic: "Linear equations",
        explanation: "<p>Distribute first: 3x \u2212 12 = 2x + 5, so x = 17. The tempting 9 comes from writing 3x \u2212 4 = 2x + 5 and forgetting to distribute the 3 across the \u22124.</p>"
      },
      {
        n: 2,
        prompt: "For which values of x is \u22122x + 7 > 15 ?",
        choices: ["x < \u22124", "x > \u22124", "x < 11", "x > 11"],
        answer: 0,
        topic: "Linear inequalities",
        explanation: "<p>\u22122x > 8, then divide by \u22122 and flip the inequality: x < \u22124. The trap x > \u22124 comes from not reversing the sign when dividing by a negative number.</p>"
      },
      {
        n: 3,
        prompt: "If 5x \u2212 3 = 2x + 12, then x = ?",
        choices: ["3", "5", "9", "15"],
        answer: 1,
        topic: "Linear equations",
        explanation: "<p>3x = 15, so x = 5. The trap 15 comes from solving 3x = 15 but forgetting the final division by 3.</p>"
      },
      {
        n: 4,
        prompt: "If 4(x + 2) = 2(x + 10), what is x ?",
        choices: ["1", "4", "6", "12"],
        answer: 2,
        topic: "Linear equations",
        explanation: "<p>4x + 8 = 2x + 20 gives 2x = 12, so x = 6. The trap 1 comes from distributing only the left side: 4x + 8 = 2x + 10.</p>"
      },
      {
        n: 5,
        prompt: "If (2/3)y \u2212 4 = 2, what is y ?",
        choices: ["3", "6", "7", "9"],
        answer: 3,
        topic: "Linear equations",
        explanation: "<p>(2/3)y = 6, so y = 6 \u00d7 (3/2) = 9. The trap 6 comes from stopping at (2/3)y = 6 and reading 6 as the answer instead of dividing by the coefficient.</p>"
      },
      {
        n: 6,
        prompt: "If 7 \u2212 3x = 3x \u2212 5, what is x ?",
        choices: ["2", "\u22122", "6", "12"],
        answer: 0,
        topic: "Linear equations",
        explanation: "<p>Add 3x to both sides and add 5: 12 = 6x, so x = 2. The trap 12 comes from stopping at 12 = 6x without dividing by 6.</p>"
      },
      {
        n: 7,
        prompt: "Which describes all x with 3x + 5 \u2264 2 ?",
        choices: ["x \u2264 1", "x \u2264 \u22121", "x \u2265 \u22121", "x \u2264 \u22129"],
        answer: 1,
        topic: "Linear inequalities",
        explanation: "<p>3x \u2264 \u22123, so x \u2264 \u22121. The trap x \u2265 \u22121 comes from wrongly flipping the sign \u2014 you only flip when multiplying or dividing by a negative, not when subtracting 5.</p>"
      },
      {
        n: 8,
        prompt: "A taxi charges a $3 base fare plus $2 per mile. If a ride costs $17, how many miles was it?",
        choices: ["5", "6", "7", "10"],
        answer: 2,
        topic: "Linear models",
        explanation: "<p>3 + 2m = 17 gives 2m = 14, so m = 7. The trap 10 comes from computing (17 + 3)/2, adding the base fare instead of subtracting it.</p>"
      }
    ]
  },
  {
    id: "math-percent",
    section: "Math",
    title: "Percents, Ratios & Proportions",
    blurb: "Turn word phrases into proportions and handle multi-step discounts \u2014 high-frequency ACT points that students rush and miss.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "What is 20% of 150 ?",
        choices: ["15", "30", "45", "60"],
        answer: 1,
        topic: "Percent of a number",
        explanation: "<p>0.20 \u00d7 150 = 30. The trap 15 is 10% of 150 \u2014 shifting the decimal one place too far.</p>"
      },
      {
        n: 2,
        prompt: "45 is what percent of 180 ?",
        choices: ["15%", "20%", "25%", "40%"],
        answer: 2,
        topic: "Percent relationships",
        explanation: "<p>45/180 = 0.25 = 25%. The trap 20% comes from computing 36/180; always divide the part by the whole, 45 \u00f7 180.</p>"
      },
      {
        n: 3,
        prompt: "A shirt priced at $80 is marked down 25%, and then 10% is taken off the reduced price. What is the final price?",
        choices: ["$52", "$50", "$56", "$54"],
        answer: 3,
        topic: "Successive percents",
        explanation: "<p>80 \u00d7 0.75 = 60, then 60 \u00d7 0.90 = 54. The trap $52 comes from adding the discounts (25% + 10% = 35%) and taking 80 \u00d7 0.65; successive percents do not add.</p>"
      },
      {
        n: 4,
        prompt: "In a class the ratio of boys to girls is 3 to 5. If there are 24 boys, how many girls are there?",
        choices: ["40", "24", "32", "64"],
        answer: 0,
        topic: "Ratios",
        explanation: "<p>24 boys is 3 parts, so 1 part = 8 and girls = 5 \u00d7 8 = 40. The trap 64 is the total number of students, not the number of girls.</p>"
      },
      {
        n: 5,
        prompt: "A town's population grows from 200 to 250. What is the percent increase?",
        choices: ["20%", "25%", "50%", "125%"],
        answer: 1,
        topic: "Percent change",
        explanation: "<p>Change/original = 50/200 = 0.25 = 25%. The trap 20% uses the new value as the base (50/250); percent change always divides by the original.</p>"
      },
      {
        n: 6,
        prompt: "A drink mix uses 3 parts water to 2 parts juice. In 20 liters of mix, how many liters are juice?",
        choices: ["4", "6", "8", "12"],
        answer: 2,
        topic: "Proportions",
        explanation: "<p>Total parts = 5, so juice = (2/5) \u00d7 20 = 8. The trap 12 is the amount of water (3/5 of the mix), not the juice.</p>"
      },
      {
        n: 7,
        prompt: "A $100 item's price rises 20% and then falls 20%. What is the final price?",
        choices: ["$100", "$104", "$98", "$96"],
        answer: 3,
        topic: "Successive percents",
        explanation: "<p>100 \u00d7 1.20 = 120, then 120 \u00d7 0.80 = 96. The trap $100 assumes the two changes cancel, but the 20% drop is taken from the larger $120.</p>"
      },
      {
        n: 8,
        prompt: "If 8 pens cost $6, how much do 20 pens cost at the same rate?",
        choices: ["$15", "$12", "$16", "$18"],
        answer: 0,
        topic: "Proportions",
        explanation: "<p>Unit price = 6/8 = $0.75, so 20 \u00d7 0.75 = $15. The trap $16 comes from the sloppy estimate 20 \u00d7 0.8; use the exact rate 6 \u00f7 8.</p>"
      }
    ]
  },
  {
    id: "math-quadratic",
    section: "Math",
    title: "Quadratics & Factoring",
    blurb: "Factor, find roots, and read vertex form fast \u2014 quadratics appear on every ACT Math section, often as easy points in disguise.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "What is the sum of the solutions of x\u00b2 \u2212 5x + 6 = 0 ?",
        choices: ["\u22125", "1", "5", "6"],
        answer: 2,
        topic: "Roots of a quadratic",
        explanation: "<p>Factors are (x \u2212 2)(x \u2212 3), so the roots are 2 and 3 and their sum is 5. The trap 6 is the product of the roots, not the sum.</p>"
      },
      {
        n: 2,
        prompt: "Which of the following is a factor of x\u00b2 \u2212 9 ?",
        choices: ["(x \u2212 9)", "(x + 9)", "(x \u2212 3)(x \u2212 3)", "(x + 3)"],
        answer: 3,
        topic: "Difference of squares",
        explanation: "<p>x\u00b2 \u2212 9 = (x \u2212 3)(x + 3), so (x + 3) is a factor. The trap (x \u2212 9) treats 9 as a root, but the roots are \u00b13, not \u00b19.</p>"
      },
      {
        n: 3,
        prompt: "What are all solutions of x\u00b2 = 7x ?",
        choices: ["0 and 7", "7 only", "\u22127 and 0", "0 and \u22127"],
        answer: 0,
        topic: "Solving by factoring",
        explanation: "<p>Move all terms over: x\u00b2 \u2212 7x = 0, so x(x \u2212 7) = 0 and x = 0 or 7. The trap '7 only' comes from dividing both sides by x, which illegally discards the solution x = 0.</p>"
      },
      {
        n: 4,
        prompt: "The graph of y = (x \u2212 2)\u00b2 + 3 has its vertex at which point?",
        choices: ["(\u22122, 3)", "(2, 3)", "(2, \u22123)", "(\u22122, \u22123)"],
        answer: 1,
        topic: "Vertex form",
        explanation: "<p>In y = (x \u2212 h)\u00b2 + k the vertex is (h, k) = (2, 3). The trap (\u22122, 3) forgets that x \u2212 2 = 0 gives x = +2, so h is positive.</p>"
      },
      {
        n: 5,
        prompt: "How many real solutions does 2x\u00b2 + 3x + 5 = 0 have?",
        choices: ["2", "1", "0", "\u221231"],
        answer: 2,
        topic: "Discriminant",
        explanation: "<p>Discriminant = b\u00b2 \u2212 4ac = 9 \u2212 40 = \u221231 < 0, so there are 0 real solutions. The trap \u221231 reports the discriminant value instead of the count it implies.</p>"
      },
      {
        n: 6,
        prompt: "What is the positive solution of x\u00b2 + 2x \u2212 8 = 0 ?",
        choices: ["\u22124", "4", "\u22122", "2"],
        answer: 3,
        topic: "Solving by factoring",
        explanation: "<p>(x + 4)(x \u2212 2) = 0 gives x = \u22124 or 2, so the positive solution is 2. The trap 4 misreads the factor (x \u2212 2) as giving \u22122 and flips signs on both roots.</p>"
      },
      {
        n: 7,
        prompt: "A ball's height is h = \u221216t\u00b2 + 32t feet after t seconds. At what t > 0 does it return to the ground?",
        choices: ["2", "1", "0.5", "4"],
        answer: 0,
        topic: "Quadratic applications",
        explanation: "<p>Set h = 0: t(\u221216t + 32) = 0, so t = 0 or t = 2; the ball lands at t = 2. The trap 1 is the time of maximum height (the vertex), not when it hits the ground.</p>"
      },
      {
        n: 8,
        prompt: "When (x + 3)\u00b2 is expanded, what is the coefficient of the x term?",
        choices: ["3", "6", "9", "12"],
        answer: 1,
        topic: "Expanding binomials",
        explanation: "<p>(x + 3)\u00b2 = x\u00b2 + 6x + 9, so the coefficient is 6. The trap 9 uses the constant term; the middle term is 2 \u00d7 3 = 6.</p>"
      }
    ]
  },
  {
    id: "math-functions",
    section: "Math",
    title: "Functions, Notation & Transformations",
    blurb: "Evaluate f(x), compose functions, and shift graphs \u2014 notation the ACT uses to make easy arithmetic look intimidating.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "If f(x) = 2x\u00b2 \u2212 1, what is f(3) ?",
        choices: ["11", "5", "35", "17"],
        answer: 3,
        topic: "Evaluating functions",
        explanation: "<p>f(3) = 2(9) \u2212 1 = 17. The trap 35 comes from squaring 2x as (2\u00b73)\u00b2 = 36; only x is squared, so it is 2\u00b7(3\u00b2).</p>"
      },
      {
        n: 2,
        prompt: "If f(x) = 3x + 2, what is f(a + 1) ?",
        choices: ["3a + 5", "3a + 3", "3a + 2", "a + 5"],
        answer: 0,
        topic: "Function notation",
        explanation: "<p>f(a + 1) = 3(a + 1) + 2 = 3a + 5. The trap 3a + 3 distributes the 3 but forgets to keep the +2 outside.</p>"
      },
      {
        n: 3,
        prompt: "The graph of g(x \u2212 4) is the graph of g(x) shifted in which direction?",
        choices: ["left 4", "right 4", "up 4", "down 4"],
        answer: 1,
        topic: "Transformations",
        explanation: "<p>Replacing x with x \u2212 4 shifts the graph right 4. The trap 'left 4' assumes the sign inside the parentheses matches the visual direction, but horizontal shifts move opposite the sign.</p>"
      },
      {
        n: 4,
        prompt: "If f(x) = |x \u2212 2|, what is f(\u22123) ?",
        choices: ["\u22125", "1", "5", "\u22121"],
        answer: 2,
        topic: "Absolute value functions",
        explanation: "<p>f(\u22123) = |\u22123 \u2212 2| = |\u22125| = 5. The trap \u22125 forgets that absolute value makes the result nonnegative.</p>"
      },
      {
        n: 5,
        prompt: "If f(x) = x\u00b2 + 1 and g(x) = 2x, what is f(g(2)) ?",
        choices: ["10", "5", "8", "17"],
        answer: 3,
        topic: "Composition",
        explanation: "<p>Work inside out: g(2) = 4, then f(4) = 16 + 1 = 17. The trap 10 reverses the order as g(f(2)) = g(5) = 10; f(g(2)) means apply g first.</p>"
      },
      {
        n: 6,
        prompt: "What is the domain of f(x) = \u221a(x \u2212 3) ?",
        choices: ["x \u2265 3", "x \u2264 3", "x > 3", "x \u2265 \u22123"],
        answer: 0,
        topic: "Domain",
        explanation: "<p>The radicand must be \u2265 0: x \u2212 3 \u2265 0, so x \u2265 3. The trap x \u2265 \u22123 flips the sign when isolating x instead of adding 3 to both sides.</p>"
      },
      {
        n: 7,
        prompt: "If f(x) = 5 \u2212 2x, for what value of x is f(x) = \u22121 ?",
        choices: ["2", "3", "\u22123", "\u22122"],
        answer: 1,
        topic: "Solving f(x) = k",
        explanation: "<p>5 \u2212 2x = \u22121 gives \u22122x = \u22126, so x = 3. The trap \u22123 forgets to divide the negative correctly, dropping a sign.</p>"
      },
      {
        n: 8,
        prompt: "A linear function gives f(1) = 4, f(2) = 7, and f(3) = 10. What is f(5) ?",
        choices: ["13", "19", "16", "22"],
        answer: 2,
        topic: "Linear functions",
        explanation: "<p>The slope is 3, so f(x) = 3x + 1 and f(5) = 16. The trap 13 adds the slope only once past f(3) instead of twice (for x = 4 and x = 5).</p>"
      }
    ]
  },
  {
    id: "math-coordinate",
    section: "Math",
    title: "Coordinate Geometry",
    blurb: "Slope, distance, midpoint, and circle equations \u2014 formula recall that turns into fast, guaranteed points on test day.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "What is the slope of the line through (1, 2) and (4, 11) ?",
        choices: ["3", "1/3", "\u22123", "9"],
        answer: 0,
        topic: "Slope",
        explanation: "<p>Slope = (11 \u2212 2)/(4 \u2212 1) = 9/3 = 3. The trap 1/3 inverts the formula, dividing run by rise instead of rise by run.</p>"
      },
      {
        n: 2,
        prompt: "What is the distance between (0, 0) and (3, 4) ?",
        choices: ["7", "5", "\u221a7", "12"],
        answer: 1,
        topic: "Distance formula",
        explanation: "<p>\u221a(3\u00b2 + 4\u00b2) = \u221a25 = 5. The trap 7 adds the legs (3 + 4) instead of using the Pythagorean distance formula.</p>"
      },
      {
        n: 3,
        prompt: "What is the midpoint of the segment from (\u22122, 6) to (4, \u22122) ?",
        choices: ["(3, 4)", "(1, 4)", "(1, 2)", "(2, 1)"],
        answer: 2,
        topic: "Midpoint",
        explanation: "<p>Midpoint = ((\u22122 + 4)/2, (6 + (\u22122))/2) = (1, 2). The trap (3, 4) subtracts the coordinates instead of averaging them.</p>"
      },
      {
        n: 4,
        prompt: "Which equation describes a circle with center (2, \u22123) and radius 5 ?",
        choices: ["(x + 2)\u00b2 + (y \u2212 3)\u00b2 = 25", "(x \u2212 2)\u00b2 + (y \u2212 3)\u00b2 = 5", "(x + 2)\u00b2 + (y + 3)\u00b2 = 5", "(x \u2212 2)\u00b2 + (y + 3)\u00b2 = 25"],
        answer: 3,
        topic: "Circle equations",
        explanation: "<p>(x \u2212 h)\u00b2 + (y \u2212 k)\u00b2 = r\u00b2 with (h, k) = (2, \u22123) gives (x \u2212 2)\u00b2 + (y + 3)\u00b2 = 25. The traps flip the center signs or use r = 5 instead of r\u00b2 = 25.</p>"
      },
      {
        n: 5,
        prompt: "A line passes through (0, 4) with slope \u22122. What is its x-intercept?",
        choices: ["2", "4", "\u22122", "8"],
        answer: 0,
        topic: "Intercepts",
        explanation: "<p>y = \u22122x + 4; set y = 0: 0 = \u22122x + 4, so x = 2. The trap 4 reports the y-intercept instead of the x-intercept.</p>"
      },
      {
        n: 6,
        prompt: "Which line is parallel to y = 3x \u2212 1 and passes through (0, 5) ?",
        choices: ["y = \u22123x + 5", "y = 3x + 5", "y = (1/3)x + 5", "y = \u2212(1/3)x"],
        answer: 1,
        topic: "Parallel lines",
        explanation: "<p>Parallel lines share the slope 3 and this one has y-intercept 5: y = 3x + 5. The trap \u2212(1/3)x is the perpendicular slope, not the parallel one.</p>"
      },
      {
        n: 7,
        prompt: "The circle x\u00b2 + y\u00b2 = 36 has what radius?",
        choices: ["36", "3", "6", "\u221a6"],
        answer: 2,
        topic: "Circle equations",
        explanation: "<p>r\u00b2 = 36, so r = 6. The trap 36 reports r\u00b2 instead of taking the square root to get r.</p>"
      },
      {
        n: 8,
        prompt: "What is the slope of a line perpendicular to y = (2/5)x + 1 ?",
        choices: ["2/5", "5/2", "\u22122/5", "\u22125/2"],
        answer: 3,
        topic: "Perpendicular lines",
        explanation: "<p>Perpendicular slope is the negative reciprocal of 2/5, which is \u22125/2. The trap \u22122/5 only negates the slope without also inverting it.</p>"
      }
    ]
  },
  {
    id: "math-geometry",
    section: "Math",
    title: "Angles, Triangles & Circles",
    blurb: "Angle sums, the Pythagorean theorem, area, and circle facts \u2014 plane geometry that rewards quick, confident formula use.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "Two angles of a triangle measure 50\u00b0 and 60\u00b0. What is the third angle?",
        choices: ["80\u00b0", "70\u00b0", "60\u00b0", "110\u00b0"],
        answer: 1,
        topic: "Triangle angle sum",
        explanation: "<p>Angles sum to 180\u00b0: 180 \u2212 (50 + 60) = 70\u00b0. The trap 110\u00b0 is just the sum of the two given angles, not the remaining angle.</p>"
      },
      {
        n: 2,
        prompt: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
        choices: ["12", "14", "10", "\u221a28"],
        answer: 2,
        topic: "Pythagorean theorem",
        explanation: "<p>\u221a(6\u00b2 + 8\u00b2) = \u221a100 = 10. The trap 14 adds the legs instead of using a\u00b2 + b\u00b2 = c\u00b2.</p>"
      },
      {
        n: 3,
        prompt: "What is the sum of the interior angles of a pentagon?",
        choices: ["360\u00b0", "450\u00b0", "900\u00b0", "540\u00b0"],
        answer: 3,
        topic: "Polygon angles",
        explanation: "<p>(n \u2212 2) \u00d7 180\u00b0 = (5 \u2212 2) \u00d7 180 = 540\u00b0. The trap 360\u00b0 is the exterior angle sum, which is 360\u00b0 for every polygon.</p>"
      },
      {
        n: 4,
        prompt: "What is the area of a circle with radius 3 ?",
        choices: ["9\u03c0", "6\u03c0", "3\u03c0", "18\u03c0"],
        answer: 0,
        topic: "Circle area",
        explanation: "<p>A = \u03c0r\u00b2 = \u03c0(3\u00b2) = 9\u03c0. The trap 6\u03c0 uses the circumference formula 2\u03c0r instead of the area formula.</p>"
      },
      {
        n: 5,
        prompt: "A rectangle has length 8 and width 5. What is its perimeter?",
        choices: ["40", "26", "13", "18"],
        answer: 1,
        topic: "Perimeter",
        explanation: "<p>P = 2(8 + 5) = 26. The trap 40 is the area (8 \u00d7 5), not the perimeter.</p>"
      },
      {
        n: 6,
        prompt: "What is the complement of a 35\u00b0 angle?",
        choices: ["145\u00b0", "65\u00b0", "55\u00b0", "125\u00b0"],
        answer: 2,
        topic: "Complementary angles",
        explanation: "<p>Complementary angles sum to 90\u00b0: 90 \u2212 35 = 55\u00b0. The trap 145\u00b0 uses 180\u00b0 (supplementary) instead of 90\u00b0.</p>"
      },
      {
        n: 7,
        prompt: "Each interior angle of an equilateral triangle measures what?",
        choices: ["45\u00b0", "90\u00b0", "30\u00b0", "60\u00b0"],
        answer: 3,
        topic: "Equilateral triangles",
        explanation: "<p>180\u00b0 \u00f7 3 = 60\u00b0 for each equal angle. The trap 90\u00b0 confuses equilateral with a right triangle.</p>"
      },
      {
        n: 8,
        prompt: "Two similar triangles have a scale factor of 3. What is the ratio of their areas?",
        choices: ["9", "3", "6", "27"],
        answer: 0,
        topic: "Similar figures",
        explanation: "<p>Area ratio is the square of the scale factor: 3\u00b2 = 9. The trap 3 uses the linear ratio; the trap 27 uses the volume ratio (cube).</p>"
      }
    ]
  },
  {
    id: "math-trig",
    section: "Math",
    title: "Right-Triangle Trig & the Unit Circle",
    blurb: "SOH CAH TOA, special triangles, and unit-circle values \u2014 a compact topic that reliably yields two to four ACT points.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "In a right triangle, the side opposite an angle is 3 and the hypotenuse is 5. What is the sine of that angle?",
        choices: ["4/5", "5/3", "3/5", "3/4"],
        answer: 2,
        topic: "SOH CAH TOA",
        explanation: "<p>Sine = opposite/hypotenuse = 3/5. The trap 4/5 is the cosine (adjacent 4 over hypotenuse 5).</p>"
      },
      {
        n: 2,
        prompt: "In a right triangle, the side adjacent to an angle is 8 and the hypotenuse is 17. What is the cosine of that angle?",
        choices: ["15/17", "17/8", "8/15", "8/17"],
        answer: 3,
        topic: "SOH CAH TOA",
        explanation: "<p>Cosine = adjacent/hypotenuse = 8/17. The trap 15/17 is the sine, using the opposite leg 15.</p>"
      },
      {
        n: 3,
        prompt: "What is tan 45\u00b0 ?",
        choices: ["1", "0", "\u221a3", "1/\u221a3"],
        answer: 0,
        topic: "Special angles",
        explanation: "<p>In a 45-45-90 triangle the legs are equal, so tan 45\u00b0 = opposite/adjacent = 1. The trap 0 confuses tan 45\u00b0 with tan 0\u00b0.</p>"
      },
      {
        n: 4,
        prompt: "In a 30-60-90 triangle, the side opposite the 30\u00b0 angle is 5. What is the hypotenuse?",
        choices: ["5\u221a3", "10", "5\u221a2", "15"],
        answer: 1,
        topic: "Special right triangles",
        explanation: "<p>In a 30-60-90 triangle the hypotenuse is twice the short leg: 2 \u00d7 5 = 10. The trap 5\u221a3 is the side opposite the 60\u00b0 angle.</p>"
      },
      {
        n: 5,
        prompt: "What is sin 30\u00b0 ?",
        choices: ["\u221a3/2", "1", "1/2", "\u221a2/2"],
        answer: 2,
        topic: "Unit circle",
        explanation: "<p>sin 30\u00b0 = 1/2. The trap \u221a3/2 is sin 60\u00b0; the sine of the smaller angle is the smaller value.</p>"
      },
      {
        n: 6,
        prompt: "In a 45-45-90 triangle with legs of length 4, what is the hypotenuse?",
        choices: ["8", "4", "4\u221a3", "4\u221a2"],
        answer: 3,
        topic: "Special right triangles",
        explanation: "<p>The hypotenuse is leg \u00d7 \u221a2 = 4\u221a2. The trap 8 doubles the leg, which is the 30-60-90 rule, not the 45-45-90 rule.</p>"
      },
      {
        n: 7,
        prompt: "A 12-foot ladder leans against a wall at 60\u00b0 to the ground. How high up the wall does it reach?",
        choices: ["6\u221a3", "6", "12", "6\u221a2"],
        answer: 0,
        topic: "Trig applications",
        explanation: "<p>Height = 12 sin 60\u00b0 = 12 \u00d7 (\u221a3/2) = 6\u221a3. The trap 6 uses 12 cos 60\u00b0, which gives the horizontal distance instead of the height.</p>"
      },
      {
        n: 8,
        prompt: "On the unit circle, what is cos 180\u00b0 ?",
        choices: ["0", "\u22121", "1", "\u22121/2"],
        answer: 1,
        topic: "Unit circle",
        explanation: "<p>At 180\u00b0 the point is (\u22121, 0), so cos 180\u00b0 = \u22121. The trap 0 confuses cosine with the y-coordinate, which is sine.</p>"
      }
    ]
  },
  {
    id: "math-stats",
    section: "Math",
    title: "Statistics, Data & Probability",
    blurb: "Mean, median, mode, range, and basic probability \u2014 fast points the ACT hides inside wordy setups.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "What is the mean of the data set 3, 7, 7, 9, 14 ?",
        choices: ["6", "7", "8", "11"],
        answer: 2,
        topic: "Mean",
        explanation: "<p>Sum = 40 and there are 5 values, so mean = 40/5 = 8. The trap 7 reports the median or mode instead of the mean.</p>"
      },
      {
        n: 2,
        prompt: "What is the median of the data set 3, 7, 7, 9, 14 ?",
        choices: ["8", "9", "14", "7"],
        answer: 3,
        topic: "Median",
        explanation: "<p>With the values in order, the middle (third) value is 7. The trap 8 reports the mean; median is the positional middle, not the average.</p>"
      },
      {
        n: 3,
        prompt: "What is the mode of the data set 3, 7, 7, 9, 14 ?",
        choices: ["7", "8", "9", "14"],
        answer: 0,
        topic: "Mode",
        explanation: "<p>7 appears twice, more than any other value, so the mode is 7. The trap 8 is the mean; mode is the most frequent value.</p>"
      },
      {
        n: 4,
        prompt: "What is the range of the data set 3, 7, 7, 9, 14 ?",
        choices: ["8", "11", "14", "7"],
        answer: 1,
        topic: "Range",
        explanation: "<p>Range = maximum \u2212 minimum = 14 \u2212 3 = 11. The trap 14 reports only the maximum instead of the difference.</p>"
      },
      {
        n: 5,
        prompt: "A bag holds 3 red, 2 blue, and 5 green marbles. What is the probability of drawing a blue marble?",
        choices: ["2/5", "1/2", "1/5", "3/10"],
        answer: 2,
        topic: "Simple probability",
        explanation: "<p>There are 10 marbles total, so P(blue) = 2/10 = 1/5. The trap 2/5 uses 5 (the green count) as the denominator instead of the total.</p>"
      },
      {
        n: 6,
        prompt: "A fair six-sided die is rolled once. What is the probability of rolling an even number?",
        choices: ["1/6", "1/3", "2/3", "1/2"],
        answer: 3,
        topic: "Simple probability",
        explanation: "<p>Even outcomes are 2, 4, 6, so P = 3/6 = 1/2. The trap 1/3 miscounts the even outcomes as two instead of three.</p>"
      },
      {
        n: 7,
        prompt: "Two fair coins are flipped. What is the probability that both land heads?",
        choices: ["1/4", "1/2", "1/3", "3/4"],
        answer: 0,
        topic: "Compound probability",
        explanation: "<p>P(HH) = (1/2)(1/2) = 1/4. The trap 1/2 finds the chance of a single head rather than multiplying the two independent events.</p>"
      },
      {
        n: 8,
        prompt: "A spinner is equally likely to land on any integer 1 through 8. What is the probability of landing on a number greater than 5?",
        choices: ["1/2", "3/8", "5/8", "1/4"],
        answer: 1,
        topic: "Simple probability",
        explanation: "<p>Numbers greater than 5 are 6, 7, 8 \u2014 three outcomes \u2014 so P = 3/8. The trap 5/8 wrongly includes 5 or counts the complement.</p>"
      }
    ]
  },
  {
    id: "math-exponents",
    section: "Math",
    title: "Exponents, Radicals & Scientific Notation",
    blurb: "Master the exponent laws and radical simplification \u2014 rules the ACT tests directly and buries inside harder problems.",
    timeMinutes: 10,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "Simplify x\u00b3 \u00b7 x\u2074.",
        choices: ["x\u00b9\u00b2", "x", "x\u2077", "x\u2074\u00b3"],
        answer: 2,
        topic: "Product rule",
        explanation: "<p>When multiplying like bases, add exponents: x\u00b3\u207a\u2074 = x\u2077. The trap x\u00b9\u00b2 multiplies the exponents, which is the rule for a power of a power.</p>"
      },
      {
        n: 2,
        prompt: "Simplify (x\u00b2)\u00b3.",
        choices: ["x\u2075", "x\u2078", "x\u2079", "x\u2076"],
        answer: 3,
        topic: "Power of a power",
        explanation: "<p>Raising a power to a power multiplies exponents: x\u00b2\u02e3\u00b3 = x\u2076. The trap x\u2075 adds the exponents, which is the product rule.</p>"
      },
      {
        n: 3,
        prompt: "For x \u2260 0, what is x\u2070 ?",
        choices: ["1", "0", "x", "undefined"],
        answer: 0,
        topic: "Zero exponent",
        explanation: "<p>Any nonzero base to the zero power equals 1. The trap 0 confuses the zero exponent with multiplying by zero.</p>"
      },
      {
        n: 4,
        prompt: "What is 2\u207b\u00b3 ?",
        choices: ["\u22128", "1/8", "\u22121/8", "8"],
        answer: 1,
        topic: "Negative exponents",
        explanation: "<p>A negative exponent means reciprocal: 2\u207b\u00b3 = 1/2\u00b3 = 1/8. The trap \u22128 treats the negative exponent as a negative sign on the value.</p>"
      },
      {
        n: 5,
        prompt: "Simplify \u221a50.",
        choices: ["25\u221a2", "10\u221a5", "5\u221a2", "2\u221a5"],
        answer: 2,
        topic: "Simplifying radicals",
        explanation: "<p>\u221a50 = \u221a(25 \u00b7 2) = 5\u221a2. The trap 2\u221a5 pulls out the wrong perfect-square factor; 25 is the largest square dividing 50.</p>"
      },
      {
        n: 6,
        prompt: "Which is 0.00042 written in scientific notation?",
        choices: ["4.2 \u00d7 10\u2074", "42 \u00d7 10\u207b\u2075", "4.2 \u00d7 10\u207b\u00b3", "4.2 \u00d7 10\u207b\u2074"],
        answer: 3,
        topic: "Scientific notation",
        explanation: "<p>Move the decimal 4 places right to get 4.2, so 0.00042 = 4.2 \u00d7 10\u207b\u2074. The trap 10\u207b\u00b3 miscounts the decimal shifts by one.</p>"
      },
      {
        n: 7,
        prompt: "Simplify x\u2078 / x\u00b2.",
        choices: ["x\u2076", "x\u2074", "x\u00b9\u2070", "x\u00b9\u2076"],
        answer: 0,
        topic: "Quotient rule",
        explanation: "<p>Dividing like bases subtracts exponents: x\u2078\u207b\u00b2 = x\u2076. The trap x\u2074 divides the exponents instead of subtracting them.</p>"
      },
      {
        n: 8,
        prompt: "What is (3 \u00d7 10\u2075)(2 \u00d7 10\u00b3) ?",
        choices: ["5 \u00d7 10\u2078", "6 \u00d7 10\u2078", "6 \u00d7 10\u00b9\u2075", "6 \u00d7 10\u2075"],
        answer: 1,
        topic: "Scientific notation",
        explanation: "<p>Multiply coefficients (3 \u00d7 2 = 6) and add exponents (5 + 3 = 8): 6 \u00d7 10\u2078. The trap 6 \u00d7 10\u00b9\u2075 multiplies the exponents instead of adding them.</p>"
      }
    ]
  },
  {
    id: "math-wordproblems",
    section: "Math",
    title: "Multi-Step Word Problems & Systems",
    blurb: "Translate sentences into equations and solve systems \u2014 the skill that decides Alina's Math score more than any single formula.",
    timeMinutes: 12,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "Two numbers have a sum of 30 and a difference of 8. What is the larger number?",
        choices: ["11", "22", "15", "19"],
        answer: 3,
        topic: "Systems from words",
        explanation: "<p>x + y = 30 and x \u2212 y = 8; adding gives 2x = 38, so x = 19. The trap 11 is the smaller number, the value of y.</p>"
      },
      {
        n: 2,
        prompt: "A train travels 180 miles in 3 hours at a constant speed. What is its speed in miles per hour?",
        choices: ["60", "54", "90", "45"],
        answer: 0,
        topic: "Rate problems",
        explanation: "<p>Speed = distance/time = 180/3 = 60 mph. The trap 90 divides by 2 instead of 3, misreading the time.</p>"
      },
      {
        n: 3,
        prompt: "Two apples and three bananas cost $4.00. If each apple costs $0.50, how much does one banana cost?",
        choices: ["$0.75", "$1.00", "$1.25", "$1.50"],
        answer: 1,
        topic: "Linear systems",
        explanation: "<p>Apples cost 2 \u00d7 $0.50 = $1.00, leaving $3.00 for 3 bananas, so each banana is $1.00. The trap $1.25 comes from forgetting to subtract the apples' cost and dividing too much money among the bananas.</p>"
      },
      {
        n: 4,
        prompt: "If x + y = 10 and 2x + y = 16, what is the value of y ?",
        choices: ["6", "10", "4", "16"],
        answer: 2,
        topic: "Systems of equations",
        explanation: "<p>Subtract the equations: x = 6, then y = 10 \u2212 6 = 4. The trap 6 reports x, the value the question does not ask for.</p>"
      },
      {
        n: 5,
        prompt: "Adult tickets cost $8 and child tickets $5. If 3 adults and some children paid $39 total, how many children were there?",
        choices: ["5", "4", "2", "3"],
        answer: 3,
        topic: "Linear models",
        explanation: "<p>3 adults cost $24, leaving $15 for children at $5 each, so 15/5 = 3 children. The trap 5 divides the full $39 loosely instead of subtracting the adults first.</p>"
      },
      {
        n: 6,
        prompt: "A recipe for 4 servings uses 6 cups of flour. How many cups are needed for 10 servings?",
        choices: ["15", "12", "18", "20"],
        answer: 0,
        topic: "Proportions",
        explanation: "<p>Flour per serving is 6/4 = 1.5 cups, so 10 servings need 15 cups. The trap 12 doubles the recipe (8 servings) instead of scaling to 10.</p>"
      },
      {
        n: 7,
        prompt: "A car rental costs $30 per day plus $0.20 per mile. What is the cost for 2 days and 100 miles?",
        choices: ["$70", "$80", "$50", "$90"],
        answer: 1,
        topic: "Linear models",
        explanation: "<p>2 \u00d7 30 = $60 plus 100 \u00d7 0.20 = $20, for a total of $80. The trap $70 charges only one day instead of two.</p>"
      },
      {
        n: 8,
        prompt: "Sam is 4 years older than Tim. The sum of their ages is 28. How old is Tim?",
        choices: ["16", "14", "12", "10"],
        answer: 2,
        topic: "Age problems",
        explanation: "<p>Let Tim = T; then T + (T + 4) = 28, so 2T = 24 and T = 12. The trap 16 gives Sam's age instead of Tim's.</p>"
      }
    ]
  },
  {
    id: "eng-punctuation",
    section: "English",
    title: "Commas, Semicolons, Colons & Dashes",
    blurb: "Fix the exact punctuation the ACT loves to test \u2014 boundary marks between clauses, lists, and interruptions.",
    timeMinutes: 8,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "After the storm <u>passed, we</u> walked down to the harbor to inspect the boats.",
        choices: ["NO CHANGE", "passed we", "passed; we", "passed: we"],
        answer: 0,
        topic: "Introductory comma",
        explanation: "<p>An introductory dependent clause is set off with a comma, so NO CHANGE is correct. A semicolon (the trap) is wrong because 'After the storm passed' cannot stand alone as a sentence.</p>"
      },
      {
        n: 2,
        prompt: "She had only one goal that summer<u>; to finish</u> the novel she had started in June.",
        choices: ["NO CHANGE", ": to finish", ", to finish", "\u2014 to finish,"],
        answer: 1,
        topic: "Colon usage",
        explanation: "<p>A colon introduces an explanation after a complete sentence, so ': to finish' is correct. The trap NO CHANGE uses a semicolon, which must be followed by an independent clause, and 'to finish the novel' is not one.</p>"
      },
      {
        n: 3,
        prompt: "The trail was steep and rocky<u>, we</u> were exhausted by noon.",
        choices: ["NO CHANGE", ", and so we", "; we", "  we"],
        answer: 2,
        topic: "Comma splice",
        explanation: "<p>Two independent clauses joined by only a comma form a comma splice; a semicolon correctly links them, so '; we' is right. The trap NO CHANGE leaves the splice uncorrected.</p>"
      },
      {
        n: 4,
        prompt: "The market sells many kinds of <u>fruit: such as apples, pears, and figs.</u>",
        choices: ["NO CHANGE", "fruit; such as apples, pears, and figs.", "fruit, such as: apples, pears, and figs.", "fruit such as apples, pears, and figs."],
        answer: 3,
        topic: "Colon misuse",
        explanation: "<p>A colon should not separate 'such as' from its list, so removing the colon is correct. The trap NO CHANGE inserts a colon where the sentence flows without one.</p>"
      },
      {
        n: 5,
        prompt: "We visited Rome, <u>Italy; Paris, France; and</u> Bern, Switzerland.",
        choices: ["NO CHANGE", "Italy, Paris, France, and", "Italy: Paris, France: and", "Italy \u2014 Paris, France \u2014 and"],
        answer: 0,
        topic: "Semicolons in a list",
        explanation: "<p>When list items already contain commas, semicolons separate the items, so NO CHANGE is correct. The trap of all commas makes it impossible to tell where each city-country pair ends.</p>"
      },
      {
        n: 6,
        prompt: "The recipe calls for three ingredients<u>,</u> flour, sugar, and butter.",
        choices: ["NO CHANGE", ":", ";", "  "],
        answer: 1,
        topic: "Colon before a list",
        explanation: "<p>A colon introduces a list after a complete sentence, so ':' is correct. The trap NO CHANGE uses a comma, which cannot formally introduce the list here.</p>"
      },
      {
        n: 7,
        prompt: "The dog wagged<u>, its</u> tail happily as we came up the walk.",
        choices: ["NO CHANGE", "; its", " its", "\u2014 its"],
        answer: 2,
        topic: "Unnecessary comma",
        explanation: "<p>No punctuation belongs between a verb and its object, so 'wagged its tail' is correct. The trap NO CHANGE inserts a comma that wrongly separates the verb from what it acts on.</p>"
      },
      {
        n: 8,
        prompt: "The author \u2014 a former sailor<u>, describes</u> the sea with startling precision.",
        choices: ["NO CHANGE", "; describes", ": describes", "\u2014 describes"],
        answer: 3,
        topic: "Paired dashes",
        explanation: "<p>An interruption opened with a dash must be closed with a matching dash, so '\u2014 describes' is correct. The trap NO CHANGE uses a comma that fails to pair with the opening dash.</p>"
      }
    ]
  },
  {
    id: "eng-grammar",
    section: "English",
    title: "Agreement, Tense & Pronouns",
    blurb: "Match subjects to verbs and pronouns to antecedents \u2014 the agreement traps the ACT plants across prepositional phrases.",
    timeMinutes: 8,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "The box of chocolates <u>were</u> left on the kitchen table.",
        choices: ["NO CHANGE", "was", "are", "have been"],
        answer: 1,
        topic: "Subject-verb agreement",
        explanation: "<p>The subject is 'box' (singular); 'of chocolates' is a prepositional phrase, so the verb is 'was'. The trap NO CHANGE agrees with the nearby plural 'chocolates' instead of the true subject.</p>"
      },
      {
        n: 2,
        prompt: "Each of the students <u>have</u> a locker in the east hallway.",
        choices: ["NO CHANGE", "have had", "has", "were having"],
        answer: 2,
        topic: "Indefinite pronouns",
        explanation: "<p>'Each' is singular and takes 'has'. The trap NO CHANGE matches 'students', but the subject is 'each', not the noun in the prepositional phrase.</p>"
      },
      {
        n: 3,
        prompt: "Neither the coach nor the players <u>was</u> ready for the early start.",
        choices: ["NO CHANGE", "has been", "is", "were"],
        answer: 3,
        topic: "Neither/nor agreement",
        explanation: "<p>With 'nor', the verb agrees with the nearer subject 'players' (plural), so 'were' is correct. The trap NO CHANGE agrees with 'coach' instead of the closer noun.</p>"
      },
      {
        n: 4,
        prompt: "Yesterday she <u>walked to school and bought</u> a snack on the way home.",
        choices: ["NO CHANGE", "walks to school and buys", "walked to school and buys", "will walk to school and bought"],
        answer: 0,
        topic: "Verb tense consistency",
        explanation: "<p>'Yesterday' signals past tense throughout, so NO CHANGE keeps both verbs past. The trap mixes past and present, breaking the consistent time frame.</p>"
      },
      {
        n: 5,
        prompt: "If I <u>would have</u> known about the delay, I would have left earlier.",
        choices: ["NO CHANGE", "had", "have", "would had"],
        answer: 1,
        topic: "Conditional tense",
        explanation: "<p>The 'if' clause of a past conditional takes 'had known', so 'had' is correct. The trap 'would have' wrongly puts 'would' in the if-clause instead of the result clause.</p>"
      },
      {
        n: 6,
        prompt: "Between you and <u>I</u>, the second movie was far duller than the first.",
        choices: ["NO CHANGE", "myself", "me", "mine"],
        answer: 2,
        topic: "Pronoun case",
        explanation: "<p>After the preposition 'between', the object pronoun 'me' is required. The trap NO CHANGE uses the subject pronoun 'I', which cannot serve as the object of a preposition.</p>"
      },
      {
        n: 7,
        prompt: "A responsible student should always keep <u>their</u> notes organized.",
        choices: ["NO CHANGE", "them", "they're", "his or her"],
        answer: 3,
        topic: "Pronoun agreement",
        explanation: "<p>The singular antecedent 'a student' needs a singular pronoun, so 'his or her' agrees. The trap NO CHANGE pairs the singular noun with the plural 'their'.</p>"
      },
      {
        n: 8,
        prompt: "The team celebrated <u>its</u> hard-won victory late into the night.",
        choices: ["NO CHANGE", "their", "they're", "it's"],
        answer: 0,
        topic: "Collective nouns",
        explanation: "<p>'Team' is a collective noun acting as one unit, so the singular 'its' is correct. The trap 'their' treats the team as plural, and 'it's' means 'it is'.</p>"
      }
    ]
  },
  {
    id: "eng-structure",
    section: "English",
    title: "Fragments, Run-ons, Modifiers & Parallelism",
    blurb: "Repair broken sentence boundaries and mismatched structure \u2014 the ACT's favorite way to test real writing sense.",
    timeMinutes: 8,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "The lecture ran long<u> the students grew restless</u> by the end of the hour.",
        choices: ["NO CHANGE", ", the students grew restless", ", so the students grew restless", ": the students grew restless"],
        answer: 2,
        topic: "Run-on sentences",
        explanation: "<p>Two independent clauses need a comma plus a conjunction, so ', so the students grew restless' is correct. The trap NO CHANGE fuses the clauses, and adding only a comma would create a comma splice.</p>"
      },
      {
        n: 2,
        prompt: "On weekends she enjoys hiking, swimming, and <u>to bike</u> along the river trail.",
        choices: ["NO CHANGE", "to ride a bike", "she bikes", "biking"],
        answer: 3,
        topic: "Parallelism",
        explanation: "<p>Items in a series must share form; 'hiking, swimming, and biking' are all gerunds. The trap NO CHANGE switches to an infinitive, breaking the parallel structure.</p>"
      },
      {
        n: 3,
        prompt: "<u>Running down the street, the boy</u> waved at his friend across the way.",
        choices: ["NO CHANGE", "Running down the street the boy", "Running down the street, the boy, ", "Running down the street. The boy"],
        answer: 0,
        topic: "Modifier placement",
        explanation: "<p>The modifier 'Running down the street' correctly describes 'the boy', who follows the comma, so NO CHANGE is right. The other choices drop the needed comma or chop the sentence into a fragment.</p>"
      },
      {
        n: 4,
        prompt: "<u>Walking to school, the rain soaked</u> her new jacket before she arrived.",
        choices: ["NO CHANGE", "Walking to school, she got her jacket soaked by the rain", "The rain, walking to school, soaked", "Walking to school the rain soaked"],
        answer: 1,
        topic: "Dangling modifiers",
        explanation: "<p>The opening phrase must describe a person who can walk, so 'she' should follow it. The trap NO CHANGE leaves 'the rain' as the walker, a dangling modifier.</p>"
      },
      {
        n: 5,
        prompt: "<u>Although the museum was crowded.</u> We still enjoyed the new exhibit.",
        choices: ["NO CHANGE", "Although the museum was crowded;", "Although the museum was crowded,", "The museum was crowded. Although,"],
        answer: 2,
        topic: "Sentence fragments",
        explanation: "<p>'Although the museum was crowded' is a dependent clause and must attach to the main clause with a comma. The trap NO CHANGE ends it with a period, leaving a fragment.</p>"
      },
      {
        n: 6,
        prompt: "The job calls for someone who is punctual, organized, and <u>works hard</u>.",
        choices: ["NO CHANGE", "can work hard", "a hard worker", "hardworking"],
        answer: 3,
        topic: "Parallelism",
        explanation: "<p>The series lists adjectives ('punctual, organized'), so it should end with the adjective 'hardworking'. The trap NO CHANGE shifts to a verb phrase, breaking the pattern.</p>"
      },
      {
        n: 7,
        prompt: "<u>Having finished her homework, Maria</u> went outside to shoot baskets.",
        choices: ["NO CHANGE", "Having finished her homework Maria", "Having finished her homework; Maria", "Maria, having finished her homework she"],
        answer: 0,
        topic: "Modifier placement",
        explanation: "<p>The introductory phrase correctly modifies 'Maria' and is set off by a comma, so NO CHANGE is right. The other choices drop the comma, misuse a semicolon, or create a doubled subject.</p>"
      },
      {
        n: 8,
        prompt: "The store closed early<u>, </u>we missed the sale by ten minutes.",
        choices: ["NO CHANGE", "; ", ", and so ", "  "],
        answer: 1,
        topic: "Comma splice",
        explanation: "<p>Two complete sentences joined by a comma alone form a comma splice; a semicolon fixes it. The trap NO CHANGE keeps the splice, and ', and so' is wordy and awkward.</p>"
      }
    ]
  },
  {
    id: "eng-rhetoric",
    section: "English",
    title: "Concision, Transitions & Word Choice",
    blurb: "Cut redundancy, pick the logical transition, and choose the right word \u2014 the rhetoric skills that lift a 28 toward the 30s.",
    timeMinutes: 8,
    passageTitle: "",
    passageHtml: "",
    questions: [
      {
        n: 1,
        prompt: "The plan the committee proposed was <u>simple and effective</u>.",
        choices: ["NO CHANGE", "simple, and it was also effective in nature", "simple, effective, and not complicated", "simple and effective and worked well"],
        answer: 0,
        topic: "Concision",
        explanation: "<p>'Simple and effective' says everything needed, so NO CHANGE is best. The other choices add redundant padding like 'in nature' or 'not complicated', which repeats 'simple'.</p>"
      },
      {
        n: 2,
        prompt: "In my opinion, I <u>personally think that</u> the new rule is unfair to freshmen.",
        choices: ["NO CHANGE", "think", "personally believe in my view that", "am of the opinion and think that"],
        answer: 1,
        topic: "Redundancy",
        explanation: "<p>'In my opinion' already signals a personal view, so 'think' alone avoids repetition. The trap NO CHANGE stacks 'personally think that' on top of 'In my opinion', saying the same thing twice.</p>"
      },
      {
        n: 3,
        prompt: "The forecast promised clear skies<u>; therefore,</u> it rained steadily all afternoon.",
        choices: ["NO CHANGE", "; moreover,", "; however,", "; for example,"],
        answer: 2,
        topic: "Transitions",
        explanation: "<p>The two clauses contrast (promised sun, but it rained), so 'however' fits. The trap NO CHANGE uses 'therefore', which signals a result the sentence does not describe.</p>"
      },
      {
        n: 4,
        prompt: "She studied a little every night<u>. However,</u> she earned the top score in the class.",
        choices: ["NO CHANGE", ". In contrast,", ". Nevertheless,", ". As a result,"],
        answer: 3,
        topic: "Transitions",
        explanation: "<p>Consistent study logically caused the top score, so 'As a result' fits. The trap NO CHANGE uses 'However', which signals a contrast that the cause-and-effect meaning contradicts.</p>"
      },
      {
        n: 5,
        prompt: "The scientist's discovery had a profound <u>effect</u> on modern medicine.",
        choices: ["NO CHANGE", "affect", "effected", "affecting"],
        answer: 0,
        topic: "Word choice",
        explanation: "<p>Here the noun 'effect' (a result) is correct after 'a profound', so NO CHANGE stands. The trap 'affect' is normally a verb, not the noun the sentence needs.</p>"
      },
      {
        n: 6,
        prompt: "The two twins looked <u>exactly identical and the same</u> in their matching coats.",
        choices: ["NO CHANGE", "identical", "exactly the same in every way", "alike and identical"],
        answer: 1,
        topic: "Redundancy",
        explanation: "<p>'Identical' already means exactly the same, so the single word is best. The trap NO CHANGE piles up 'exactly', 'identical', and 'the same', which all repeat one idea.</p>"
      },
      {
        n: 7,
        prompt: "Many animals hibernate through the cold<u>. Instead,</u> bears sleep deeply for much of the winter.",
        choices: ["NO CHANGE", ". On the other hand,", ". For example,", ". Consequently,"],
        answer: 2,
        topic: "Transitions",
        explanation: "<p>Bears are an example of the general statement about hibernating animals, so 'For example' fits. The trap NO CHANGE uses 'Instead', which wrongly signals a replacement or contrast.</p>"
      },
      {
        n: 8,
        prompt: "There were <u>less</u> cars on the road this morning than usual.",
        choices: ["NO CHANGE", "lesser", "least", "fewer"],
        answer: 3,
        topic: "Word choice",
        explanation: "<p>Cars are countable, so 'fewer' is correct. The trap NO CHANGE uses 'less', which belongs with uncountable amounts like water or time, not with countable nouns.</p>"
      }
    ]
  },
  {
    id: "read-inference",
    section: "Reading",
    title: "Inference & Evidence",
    blurb: "Draw conclusions the text supports and match them to the right lines \u2014 the core move on ACT Reading's harder questions.",
    timeMinutes: 10,
    passageTitle: "The Geography of Trust",
    passageHtml: "<p><span class='pnum'>1</span>What makes the people on one street nod to strangers while, a mile away, neighbors avoid one another's eyes? The sociologist Marcus Feld spent three years trying to answer that question. Between 2018 and 2021 his team surveyed residents of forty neighborhoods in a midsize American city, asking each person how much they trusted the people who lived nearby.</p><p><span class='pnum'>2</span>Feld's team did not stop at opinions. They also counted what they called casual contact: the unplanned, everyday encounters that happen when people share a physical space. A front porch that faces the sidewalk, a cluster of mailboxes, a corner store within walking distance \u2014 each creates chances for the small exchanges that Feld believed quietly build familiarity.</p><p><span class='pnum'>3</span>The pattern that emerged was striking. Neighborhoods rich in shared public space scored far higher on trust than those without it. On blocks where homes opened onto porches, residents reported knowing twice as many neighbors by name as residents of blocks dominated by street-facing garages, where people drove straight from the road into their houses and rarely lingered outside.</p><p><span class='pnum'>4</span>Most surprising to Feld was how little household income predicted trust. One of the wealthiest developments in the study, a gated community of large homes on private cul-de-sacs, ranked near the bottom. Its residents had every material advantage, yet the very design meant to protect them \u2014 walls, gates, and long private drives \u2014 left almost no place for a casual hello.</p><p><span class='pnum'>5</span>Feld is careful about what his numbers can prove. Trusting people, he notes, may simply choose sociable neighborhoods in the first place, so the layout need not be the cause. Still, urban planners have begun to cite his work, and a few have started asking whether a well-placed bench might do as much for a community as an extra streetlight.</p>",
    questions: [
      {
        n: 1,
        prompt: "The passage as a whole most strongly suggests that neighborly trust depends heavily on:",
        choices: ["the average wealth of a neighborhood's residents", "how strictly a neighborhood controls who can enter it", "opportunities for unplanned, everyday contact among residents", "the number of years residents have lived on a block"],
        answer: 2,
        topic: "Central inference",
        explanation: "<p>Paragraphs 2 and 3 tie higher trust to 'casual contact' created by shared space, making choice C the supported reading. The trap 'wealth' is directly contradicted by Paragraph 4, where income barely predicts trust.</p>"
      },
      {
        n: 2,
        prompt: "Which detail most directly supports the idea that shared public space encourages familiarity among neighbors?",
        choices: ["Residents on porch-facing blocks knew twice as many neighbors by name", "Feld surveyed forty neighborhoods over three years", "The study measured how much residents trusted one another", "One wealthy development ranked near the bottom"],
        answer: 0,
        topic: "Textual evidence",
        explanation: "<p>Paragraph 3 offers the porch-versus-garage comparison as concrete evidence that shared space builds familiarity. The trap about surveying forty neighborhoods describes the method, not evidence for the specific claim.</p>"
      },
      {
        n: 3,
        prompt: "It can reasonably be inferred from Paragraph 4 that the design of the gated community:",
        choices: ["successfully increased residents' sense of safety and trust", "was praised by Feld as a model for other developments", "had little effect on the residents because they were wealthy", "reduced the everyday encounters that help neighbors connect"],
        answer: 3,
        topic: "Inference from a paragraph",
        explanation: "<p>Paragraph 4 says the walls and long drives 'left almost no place for a casual hello', so the design cut off ordinary contact. The trap about safety mistakes the community's intent for its measured outcome, which was low trust.</p>"
      },
      {
        n: 4,
        prompt: "The contrast between porches and garages in Paragraph 3 primarily serves to:",
        choices: ["show that older homes are generally friendlier than newer ones", "illustrate how physical layout can shape social connection", "argue that garages should be banned in new neighborhoods", "prove that driving makes people less trusting in general"],
        answer: 1,
        topic: "Function of a detail",
        explanation: "<p>The comparison links a design feature to how many neighbors residents know, illustrating layout's social effect. The trap about banning garages overstates the point; the passage describes a pattern, not a policy demand.</p>"
      },
      {
        n: 5,
        prompt: "The author's attitude toward Feld's conclusions is best described as:",
        choices: ["openly skeptical and dismissive", "enthusiastic without any reservation", "interested but attentive to the study's limits", "confused by the study's methods"],
        answer: 2,
        topic: "Author's tone",
        explanation: "<p>Paragraph 5 reports the planners' interest while noting Feld's own caution that the layout 'need not be the cause', signaling measured interest. The trap 'without any reservation' ignores that stated caveat.</p>"
      },
      {
        n: 6,
        prompt: "Which statement about income and trust is best supported by the passage?",
        choices: ["A neighborhood can be wealthy yet still rank low in trust", "Higher income always leads to higher neighborly trust", "Poorer neighborhoods reported no trust at all", "Income was the strongest predictor Feld measured"],
        answer: 0,
        topic: "Inference & evidence",
        explanation: "<p>Paragraph 4's gated community shows wealth and low trust can coexist, supporting choice A. The trap 'always leads to higher trust' is the exact relationship the paragraph disproves.</p>"
      }
    ]
  },
  {
    id: "read-vocab",
    section: "Reading",
    title: "Vocabulary in Context & Author's Tone",
    blurb: "Pin down what a word means in its sentence and hear the writer's attitude \u2014 two of the most missable Reading points.",
    timeMinutes: 10,
    passageTitle: "The Night Painter",
    passageHtml: "<p><span class='pnum'>1</span>The murals of Tomas Reyes are impossible to walk past. Splashed across the brick flanks of old warehouses, they stop pedestrians mid-stride, and even people in a hurry find themselves lingering. What holds them is not merely the scale of the work but its arresting stillness: figures caught in a single held breath, as if the wall itself had paused.</p><p><span class='pnum'>2</span>Reyes worked almost entirely at night. He claimed the darkness was practical \u2014 cooler air, empty streets \u2014 but those who knew him suspected something else. In daylight, he said, a wall shows you its flaws; at night it shows you only what you bring to it. He painted by the narrow beam of a work lamp, building enormous scenes he could not fully see until dawn revealed them.</p><p><span class='pnum'>3</span>His method was one of remarkable economy. Where other muralists layered color upon color, Reyes used few strokes, trusting each to carry weight. A single gray line became the fold of a coat; three dabs of ochre suggested a whole face turned toward the light. Critics who admired lavish detail found this restraint frustrating, even severe, yet Reyes never wavered.</p><p><span class='pnum'>4</span>He was, by every account, a restless man. He rarely returned to a finished wall, and he refused to photograph his own work, insisting that a mural belonged to its street and should fade with it. When a gallery offered to preserve one piece indoors, he declined without hesitation, calling the idea a kind of embalming.</p><p><span class='pnum'>5</span>Reyes died before his fortieth birthday, and many of his murals have since flaked away under sun and rain, exactly as he intended. What survives is mostly secondhand \u2014 grainy photographs taken by admirers, a few careful sketches. Yet his influence endures in a generation of painters who learned from him that what you leave out of a picture can speak as loudly as what you put in.</p>",
    questions: [
      {
        n: 1,
        prompt: "As used in Paragraph 1, the word \"arresting\" most nearly means:",
        choices: ["placing under legal custody", "slowing and stopping", "attention-grabbing", "delaying a decision"],
        answer: 2,
        topic: "Vocabulary in context",
        explanation: "<p>The murals make even hurried people linger, so 'arresting' means striking or attention-grabbing. The trap 'placing under legal custody' is the common everyday meaning of 'arrest' but does not fit a description of art.</p>"
      },
      {
        n: 2,
        prompt: "As used in Paragraph 3, the phrase \"remarkable economy\" refers to Reyes's:",
        choices: ["skill at selling murals for high prices", "sparing use of strokes and color", "careful management of his money", "ability to paint very quickly"],
        answer: 1,
        topic: "Vocabulary in context",
        explanation: "<p>The paragraph explains that Reyes 'used few strokes', so 'economy' means economy of means. The trap about money misreads 'economy' in its financial sense, which the paragraph never discusses.</p>"
      },
      {
        n: 3,
        prompt: "The author's overall attitude toward Reyes is best described as:",
        choices: ["dismissive of his refusal to preserve his work", "admiring of his distinctive artistic vision", "puzzled by his choice to paint murals at all", "resentful of the critics who misjudged him"],
        answer: 1,
        topic: "Author's tone",
        explanation: "<p>Phrases like 'impossible to walk past' and the closing praise of his influence show clear admiration. The trap 'dismissive' contradicts the respectful, appreciative tone throughout the passage.</p>"
      },
      {
        n: 4,
        prompt: "Reyes's decision to decline the gallery's offer (Paragraph 4) most strongly suggests that he believed:",
        choices: ["a mural's meaning was tied to its public, temporary setting", "his work was too valuable to display in a small gallery", "photographs captured his murals better than walls did", "galleries should pay artists more for their work"],
        answer: 0,
        topic: "Inference",
        explanation: "<p>He called indoor preservation 'a kind of embalming' and said a mural should fade with its street, tying meaning to place and impermanence. The trap about value misreads his objection as being about price.</p>"
      },
      {
        n: 5,
        prompt: "As used in Paragraph 3, the word \"severe\" most nearly means:",
        choices: ["physically dangerous", "extremely painful", "harsh in style or restraint", "strict in punishment"],
        answer: 2,
        topic: "Vocabulary in context",
        explanation: "<p>Critics found his sparing style 'frustrating, even severe', so 'severe' describes austere restraint. The trap 'physically dangerous' applies 'severe' to weather or injury, not to an artistic approach.</p>"
      },
      {
        n: 6,
        prompt: "The final paragraph most nearly suggests that Reyes's lasting importance lies in:",
        choices: ["the money his surviving murals now command", "the lesson that leaving things out can be powerful", "his success at preserving every mural he painted", "the grainy photographs taken by his admirers"],
        answer: 1,
        topic: "Central inference",
        explanation: "<p>The passage ends by crediting his influence to the idea that 'what you leave out ... can speak as loudly as what you put in'. The trap about photographs names how his work survived, not why he matters.</p>"
      }
    ]
  },
  {
    id: "sci-datatrends",
    section: "Science",
    title: "Reading Tables, Graphs & Trends",
    blurb: "Pull exact values, spot the direction of a trend, and interpolate \u2014 the fastest points on the Science section.",
    timeMinutes: 10,
    passageTitle: "Light, Water, and Plant Growth",
    passageHtml: "<p>A researcher grew a fast-sprouting plant, <em>Brassica rapida</em>, under controlled conditions to test how two factors affect its daily growth. In Study 1 the plants received identical water but differing light intensity (measured in lux). In Study 2 the plants received identical light but differing amounts of water. Growth rate was recorded in millimeters per day (mm/day).</p><div class='fig'><div class='fig-title'>Table 1: Study 1 \u2014 Growth Rate vs. Light Intensity</div><table class='data-table'><thead><tr><th>Light intensity (lux)</th><th>Growth rate (mm/day)</th></tr></thead><tbody><tr><td>200</td><td>1.2</td></tr><tr><td>400</td><td>2.0</td></tr><tr><td>600</td><td>2.8</td></tr><tr><td>800</td><td>3.4</td></tr><tr><td>1000</td><td>3.6</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Figure 1: Study 1 data plotted as growth rate versus light intensity</div><svg viewBox='0 0 360 220' role='img' aria-label='Line graph of plant growth rate in millimeters per day rising with light intensity in lux, from 1.2 at 200 lux to 3.6 at 1000 lux, and beginning to level off' width='100%' style='max-width:360px'><line x1='50' y1='30' x2='50' y2='190' stroke='currentColor' fill='none'/><line x1='50' y1='190' x2='330' y2='190' stroke='currentColor' fill='none'/><polyline points='50,142 120,110 190,78 260,54 330,46' stroke='currentColor' fill='none'/><text x='190' y='214' fill='currentColor' font-size='11' text-anchor='middle'>Light intensity (lux)</text><text x='16' y='110' fill='currentColor' font-size='11' text-anchor='middle' transform='rotate(-90 16 110)'>Growth (mm/day)</text><text x='50' y='202' fill='currentColor' font-size='9' text-anchor='middle'>200</text><text x='330' y='202' fill='currentColor' font-size='9' text-anchor='middle'>1000</text><text x='42' y='193' fill='currentColor' font-size='9' text-anchor='end'>0</text><text x='42' y='34' fill='currentColor' font-size='9' text-anchor='end'>4</text></svg></div><div class='fig'><div class='fig-title'>Table 2: Study 2 \u2014 Growth Rate vs. Daily Water</div><table class='data-table'><thead><tr><th>Water (mL/day)</th><th>Growth rate (mm/day)</th></tr></thead><tbody><tr><td>10</td><td>0.8</td></tr><tr><td>20</td><td>1.9</td></tr><tr><td>30</td><td>3.0</td></tr><tr><td>40</td><td>3.1</td></tr><tr><td>50</td><td>2.4</td></tr></tbody></table></div>",
    questions: [
      {
        n: 1,
        prompt: "According to Table 1, what was the growth rate at a light intensity of 600 lux?",
        choices: ["1.2 mm/day", "2.8 mm/day", "3.4 mm/day", "3.6 mm/day"],
        answer: 1,
        topic: "Reading a table",
        explanation: "<p>The row for 600 lux lists 2.8 mm/day. The trap 3.4 mm/day reads the next row down (800 lux) instead of the correct row.</p>"
      },
      {
        n: 2,
        prompt: "In Study 1, as light intensity increased from 200 to 1000 lux, the growth rate:",
        choices: ["decreased steadily", "stayed constant", "increased then decreased", "increased throughout"],
        answer: 3,
        topic: "Identifying a trend",
        explanation: "<p>Growth rises from 1.2 to 3.6 mm/day at every step, so it increases throughout. The trap 'increased then decreased' describes Study 2's water data, not the light data.</p>"
      },
      {
        n: 3,
        prompt: "According to Table 2, which amount of daily water produced the greatest growth rate?",
        choices: ["40 mL/day", "20 mL/day", "50 mL/day", "10 mL/day"],
        answer: 0,
        topic: "Reading a table",
        explanation: "<p>The highest growth rate, 3.1 mm/day, occurs at 40 mL/day. The trap 50 mL/day is the largest water amount but its growth (2.4) is lower, showing more is not always better.</p>"
      },
      {
        n: 4,
        prompt: "Based on Table 2, the growth rate for 35 mL of water per day would most likely be about:",
        choices: ["0.8 mm/day", "2.4 mm/day", "3.05 mm/day", "4.0 mm/day"],
        answer: 2,
        topic: "Interpolation",
        explanation: "<p>35 mL lies between 30 mL (3.0) and 40 mL (3.1), so the value falls near 3.05 mm/day. The trap 4.0 mm/day extrapolates far above any measured value with no support.</p>"
      },
      {
        n: 5,
        prompt: "In Figure 1, the growth rate changes least between 800 and 1000 lux. This most strongly suggests that:",
        choices: ["light has no effect on growth", "growth is approaching a maximum", "the plant is beginning to die", "water was removed at high light"],
        answer: 1,
        topic: "Interpreting a graph",
        explanation: "<p>The flattening curve means added light produces smaller gains, so growth nears a maximum. The trap 'light has no effect' is contradicted by the clear overall rise in the data.</p>"
      },
      {
        n: 6,
        prompt: "If Study 1 were repeated at 1200 lux, the growth rate would most likely be:",
        choices: ["about 1.0 mm/day", "exactly 3.6 mm/day", "less than 2.8 mm/day", "3.6 mm/day or slightly higher"],
        answer: 3,
        topic: "Extrapolation",
        explanation: "<p>Because the curve is leveling off near 3.6, a higher light would give about that value or a touch more. The trap 'exactly 3.6' ignores that the trend, though flattening, is still rising.</p>"
      }
    ]
  },
  {
    id: "sci-design",
    section: "Science",
    title: "Experimental Design & Conflicting Viewpoints",
    blurb: "Name variables and controls and weigh competing hypotheses \u2014 the reasoning half of ACT Science that rewards careful reading.",
    timeMinutes: 12,
    passageTitle: "Falling Oxygen in Miller's Pond",
    passageHtml: "<p>Over one summer, dissolved oxygen in Miller's Pond fell sharply and several fish died. Students measured dissolved oxygen (in mg/L) at four depths at two locations: Site 1, next to a farm field, and Site 2, an upstream inlet with no nearby farming that served as a comparison. They also tracked nitrate (a nutrient in fertilizer) and water temperature at Site 1 across the summer.</p><div class='fig'><div class='fig-title'>Table 1: Dissolved Oxygen (mg/L) by Depth</div><table class='data-table'><thead><tr><th>Depth (m)</th><th>Site 1 (near farm)</th><th>Site 2 (inlet)</th></tr></thead><tbody><tr><td>0</td><td>8.5</td><td>9.0</td></tr><tr><td>1</td><td>6.0</td><td>8.2</td></tr><tr><td>2</td><td>3.5</td><td>7.6</td></tr><tr><td>3</td><td>1.5</td><td>7.0</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Site 1 Nitrate and Temperature by Month</div><table class='data-table'><thead><tr><th>Month</th><th>Nitrate (mg/L)</th><th>Water temp (\u00b0C)</th></tr></thead><tbody><tr><td>May</td><td>2</td><td>16</td></tr><tr><td>June</td><td>5</td><td>20</td></tr><tr><td>July</td><td>9</td><td>26</td></tr><tr><td>August</td><td>11</td><td>28</td></tr></tbody></table></div><p><strong>Researcher A:</strong> The oxygen loss is driven by fertilizer runoff. Nitrate from the farm feeds rapid algae growth; when the algae die and decompose, the process consumes oxygen, especially in deeper water where dead matter settles. Site 1, beside the field, shows far lower oxygen than the runoff-free inlet.</p><p><strong>Researcher B:</strong> The cause is rising temperature. Warm water holds less dissolved oxygen than cool water, and the pond warmed steadily all summer. The nitrate rise is only a coincidence; the deep, still water at Site 1 simply warms and stratifies, trapping low-oxygen water near the bottom.</p>",
    questions: [
      {
        n: 1,
        prompt: "In the measurements summarized in Table 1, the independent variable is the:",
        choices: ["water depth", "dissolved oxygen", "water temperature", "number of fish"],
        answer: 0,
        topic: "Independent variable",
        explanation: "<p>Depth is the factor deliberately varied and listed in the first column, so it is the independent variable. The trap 'dissolved oxygen' is the measured response, which is the dependent variable.</p>"
      },
      {
        n: 2,
        prompt: "In Table 1, the dependent variable is the:",
        choices: ["depth of the water", "location of the site", "dissolved oxygen level", "time of day"],
        answer: 2,
        topic: "Dependent variable",
        explanation: "<p>Dissolved oxygen is what changes in response to depth, making it the dependent variable. The trap 'depth' is the variable the students set, not the one they measured as an outcome.</p>"
      },
      {
        n: 3,
        prompt: "Measuring Site 2, the inlet with no nearby farming, most likely served to:",
        choices: ["add extra nutrients to the pond", "provide a control for comparison", "increase the depth of the water", "raise the water temperature"],
        answer: 1,
        topic: "Controls",
        explanation: "<p>Site 2 has no runoff, so it is a baseline against which Site 1's oxygen can be judged \u2014 a control. The trap about adding nutrients describes the opposite of a control's purpose.</p>"
      },
      {
        n: 4,
        prompt: "According to Researcher A, the drop in dissolved oxygen is caused mainly by:",
        choices: ["rising water temperature", "reduced sunlight in the pond", "a natural decline in fish", "nutrient runoff that feeds decomposing algae"],
        answer: 3,
        topic: "Conflicting viewpoints",
        explanation: "<p>Researcher A blames nitrate runoff that fuels algae whose decay consumes oxygen. The trap 'rising temperature' is actually Researcher B's explanation, not A's.</p>"
      },
      {
        n: 5,
        prompt: "Which finding, if true, would best support Researcher B over Researcher A?",
        choices: ["Oxygen dropped most on the hottest days regardless of nitrate level", "Algae increased only where runoff was highest", "Nitrate levels rose in the weeks before oxygen fell", "Fish returned after the farm stopped using fertilizer"],
        answer: 0,
        topic: "Evaluating hypotheses",
        explanation: "<p>Researcher B ties oxygen loss to heat, so oxygen falling with temperature but not nitrate supports B. The trap about algae following runoff supports Researcher A instead.</p>"
      },
      {
        n: 6,
        prompt: "To test Researcher A's hypothesis directly, the best experiment would:",
        choices: ["measure oxygen only once during the summer", "remove all fish from the pond", "compare ponds with and without runoff while keeping temperature similar", "record only the color of the water"],
        answer: 2,
        topic: "Experimental design",
        explanation: "<p>Isolating runoff while holding temperature constant tests whether nutrients alone lower oxygen. The trap of measuring oxygen once gives no trend and cannot separate the two proposed causes.</p>"
      }
    ]
  }
];