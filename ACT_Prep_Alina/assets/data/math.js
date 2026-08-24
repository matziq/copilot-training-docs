window.ACT_DATA = window.ACT_DATA || {};

window.ACT_DATA.test1_math = {
  id: "test1_math",
  name: "Mathematics",
  timeMinutes: 50,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>A jacket originally priced at $80 is on sale for $60. What is the percent decrease in the price?</p>",
      choices: ["20%", "25%", "33%", "75%"],
      answer: 1,
      topic: "Percent change",
      difficulty: "easy",
      explanation: "<p>The decrease is 80 − 60 = 20 dollars, and percent decrease = 20/80 = 0.25 = 25%.</p><p>The trap is 20%, which is just the dollar amount of the decrease read as a percent; 33% comes from dividing by the sale price (20/60) instead of the original.</p>"
    },
    {
      n: 2,
      prompt: "<p>A recipe uses 3 cups of flour for every 2 cups of sugar. If a baker uses 12 cups of flour, how many cups of sugar are needed?</p>",
      choices: ["18", "6", "8", "24"],
      answer: 2,
      topic: "Ratios & proportions",
      difficulty: "easy",
      explanation: "<p>Set up 3/2 = 12/s, so 3s = 24 and s = 8.</p><p>The trap is 18, which comes from inverting the ratio (12 × 3/2); 24 comes from multiplying by 2 without dividing by 3.</p>"
    },
    {
      n: 3,
      prompt: "<p>The average (arithmetic mean) of 5 numbers is 20. What is the sum of the 5 numbers?</p>",
      choices: ["100", "25", "4", "15"],
      answer: 0,
      topic: "Averages",
      difficulty: "easy",
      explanation: "<p>Sum = average × count = 20 × 5 = 100.</p><p>The trap is 25 (adding 20 + 5) or 4 (dividing 20 by 5) instead of multiplying.</p>"
    },
    {
      n: 4,
      prompt: "<p>A car travels 150 miles in 3 hours. What is its average speed in miles per hour?</p>",
      choices: ["45", "50", "450", "153"],
      answer: 1,
      topic: "Unit conversion",
      difficulty: "easy",
      explanation: "<p>Average speed = distance ÷ time = 150 ÷ 3 = 50 mph.</p><p>The trap is 450, which multiplies instead of divides (150 × 3).</p>"
    },
    {
      n: 5,
      prompt: "<p>A rectangle has a length of 8 and a width of 5. What is its area?</p>",
      choices: ["13", "26", "45", "40"],
      answer: 3,
      topic: "Volume & surface area",
      difficulty: "easy",
      explanation: "<p>Area of a rectangle = length × width = 8 × 5 = 40.</p><p>The trap is 26, which is the perimeter 2(8 + 5); 13 is just the sum of the sides.</p>"
    },
    {
      n: 6,
      prompt: "<p>A bag contains 4 red, 3 blue, and 5 green marbles. If one marble is drawn at random, what is the probability that it is blue?</p>",
      choices: ["3/8", "1/3", "1/4", "1/12"],
      answer: 2,
      topic: "Probability",
      difficulty: "easy",
      explanation: "<p>There are 4 + 3 + 5 = 12 marbles, so P(blue) = 3/12 = 1/4.</p><p>The trap is 1/3, which divides the 3 blue by only the 9 non-blue marbles instead of the full total of 12.</p>"
    },
    {
      n: 7,
      prompt: "<p>Simplify: x<sup>3</sup> · x<sup>4</sup>.</p>",
      choices: ["x<sup>7</sup>", "x<sup>12</sup>", "x", "x<sup>34</sup>"],
      answer: 0,
      topic: "Exponent rules",
      difficulty: "easy",
      explanation: "<p>When multiplying powers with the same base, add the exponents: x<sup>3+4</sup> = x<sup>7</sup>.</p><p>The trap is x<sup>12</sup>, which comes from multiplying the exponents instead of adding them.</p>"
    },
    {
      n: 8,
      prompt: "<p>If 3x − 7 = 14, what is the value of x?</p>",
      choices: ["3", "7", "21", "7/3"],
      answer: 1,
      topic: "Linear equations",
      difficulty: "easy",
      explanation: "<p>Add 7 to both sides: 3x = 21, then divide by 3 to get x = 7.</p><p>The trap is 21, which is the value of 3x before dividing by the coefficient.</p>"
    },
    {
      n: 9,
      prompt: "<p>Which of the following is equal to 0.00042 written in scientific notation?</p>",
      choices: ["4.2 × 10<sup>-3</sup>", "4.2 × 10<sup>4</sup>", "42 × 10<sup>-5</sup>", "4.2 × 10<sup>-4</sup>"],
      answer: 3,
      topic: "Exponent rules",
      difficulty: "easy",
      explanation: "<p>Move the decimal point 4 places to the right to get 4.2, so 0.00042 = 4.2 × 10<sup>-4</sup>.</p><p>The trap is 4.2 × 10<sup>-3</sup>, which miscounts the decimal shift by one place.</p>"
    },
    {
      n: 10,
      prompt: "<p>What is 15% of 60?</p>",
      choices: ["9", "4", "45", "900"],
      answer: 0,
      topic: "Percentages",
      difficulty: "easy",
      explanation: "<p>15% of 60 = 0.15 × 60 = 9.</p><p>The trap is 900, which multiplies 15 × 60 without converting the percent to a decimal.</p>"
    },
    {
      n: 11,
      prompt: "<p>Find the median of the data set: 3, 7, 7, 10, 15.</p>",
      choices: ["8.4", "10", "7", "12"],
      answer: 2,
      topic: "Statistics & data displays",
      difficulty: "easy",
      explanation: "<p>The values are already in order, and the middle (third) value is 7, so the median is 7.</p><p>The trap is 8.4, which is the mean (42 ÷ 5), not the median.</p>"
    },
    {
      n: 12,
      prompt: "<p>A cube has an edge length of 4. What is its volume?</p>",
      choices: ["16", "64", "96", "12"],
      answer: 1,
      topic: "Volume & surface area",
      difficulty: "easy",
      explanation: "<p>Volume of a cube = edge<sup>3</sup> = 4<sup>3</sup> = 64.</p><p>The trap is 16, the area of one face (4<sup>2</sup>); 96 is the total surface area (6 × 16).</p>"
    },
    {
      n: 13,
      prompt: "<div class='fig'><svg viewBox='0 0 200 200' class='diagram' role='img' aria-label='Two points on a coordinate grid connected by a line'><line x1='20' y1='180' x2='190' y2='180' stroke='currentColor' stroke-width='1'/><line x1='20' y1='180' x2='20' y2='10' stroke='currentColor' stroke-width='1'/><line x1='40' y1='160' x2='120' y2='40' stroke='currentColor' stroke-width='2'/><circle cx='40' cy='160' r='3' fill='currentColor'/><circle cx='120' cy='40' r='3' fill='currentColor'/><text x='44' y='173' fill='currentColor' font-size='12'>(1, 2)</text><text x='104' y='34' fill='currentColor' font-size='12'>(3, 8)</text></svg></div><p>What is the slope of the line that passes through the points (1, 2) and (3, 8)?</p>",
      choices: ["1/3", "2", "−3", "3"],
      answer: 3,
      topic: "Coordinate geometry",
      difficulty: "medium",
      explanation: "<p>Slope = (8 − 2)/(3 − 1) = 6/2 = 3.</p><p>The trap is 1/3, which flips the rise and run (run over rise).</p>"
    },
    {
      n: 14,
      prompt: "<p>Solve the system: 2x + y = 10 and x − y = 2. What is the value of x?</p>",
      choices: ["4", "3", "6", "2"],
      answer: 0,
      topic: "Systems of equations",
      difficulty: "medium",
      explanation: "<p>Add the two equations to eliminate y: 3x = 12, so x = 4.</p><p>The trap is 2, which is the value of y (the other variable), not x.</p>"
    },
    {
      n: 15,
      prompt: "<p>What is the larger solution of x<sup>2</sup> − 5x + 6 = 0?</p>",
      choices: ["2", "6", "3", "−3"],
      answer: 2,
      topic: "Quadratic functions",
      difficulty: "medium",
      explanation: "<p>Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3; the larger is 3.</p><p>The trap is 6, the constant term (the product of the roots), and 2 is the smaller root.</p>"
    },
    {
      n: 16,
      prompt: "<div class='fig'><svg viewBox='0 0 240 180' class='diagram' role='img' aria-label='Right triangle with vertical leg 3, horizontal leg 4, and hypotenuse 5, angle theta at lower right'><polygon points='30,150 210,150 30,30' fill='none' stroke='currentColor' stroke-width='2'/><rect x='30' y='138' width='12' height='12' fill='none' stroke='currentColor'/><text x='115' y='168' fill='currentColor' font-size='13'>4</text><text x='14' y='95' fill='currentColor' font-size='13'>3</text><text x='118' y='84' fill='currentColor' font-size='13'>5</text><text x='182' y='144' fill='currentColor' font-size='13'>θ</text></svg></div><p>In the right triangle above, the side opposite angle θ has length 3 and the hypotenuse has length 5. What is sin θ?</p>",
      choices: ["4/5", "3/5", "3/4", "5/3"],
      answer: 1,
      topic: "Right-triangle trig",
      difficulty: "medium",
      explanation: "<p>By SOH, sin θ = opposite/hypotenuse = 3/5.</p><p>The trap is 4/5 (that is cos θ, adjacent/hypotenuse) and 3/4 (that is tan θ).</p>"
    },
    {
      n: 17,
      prompt: "<p>A town's population grows from 250 to 300. What is the percent increase?</p>",
      choices: ["20%", "16.7%", "50%", "120%"],
      answer: 0,
      topic: "Percent change",
      difficulty: "medium",
      explanation: "<p>Increase = 300 − 250 = 50, and 50/250 = 0.20 = 20%.</p><p>The trap is 16.7%, which divides the change by the new value (50/300) instead of the original.</p>"
    },
    {
      n: 18,
      prompt: "<p>A bacteria culture doubles every hour and starts with 500 bacteria. How many bacteria are there after 3 hours?</p>",
      choices: ["1500", "3000", "8000", "4000"],
      answer: 3,
      topic: "Exponential models",
      difficulty: "medium",
      explanation: "<p>Doubling gives 500 × 2<sup>3</sup> = 500 × 8 = 4000.</p><p>The trap is 1500, which multiplies by 3 (linear growth) instead of doubling three times; 8000 uses 2<sup>4</sup>.</p>"
    },
    {
      n: 19,
      prompt: "<p>If f(x) = 2x + 1 and g(x) = x<sup>2</sup>, what is f(g(3))?</p>",
      choices: ["49", "13", "19", "37"],
      answer: 2,
      topic: "Function notation",
      difficulty: "hard",
      explanation: "<p>First g(3) = 9, then f(9) = 2(9) + 1 = 19.</p><p>The trap is 49, which computes g(f(3)) instead: f(3) = 7 and then 7<sup>2</sup> = 49 — the composition order matters.</p>"
    },
    {
      n: 20,
      prompt: "<p>Which equation represents a circle with center (2, −3) and radius 4?</p>",
      choices: ["(x − 2)<sup>2</sup> + (y + 3)<sup>2</sup> = 4", "(x + 2)<sup>2</sup> + (y − 3)<sup>2</sup> = 16", "(x − 2)<sup>2</sup> + (y − 3)<sup>2</sup> = 16", "(x − 2)<sup>2</sup> + (y + 3)<sup>2</sup> = 16"],
      answer: 3,
      topic: "Circle equations",
      difficulty: "medium",
      explanation: "<p>The form is (x − h)<sup>2</sup> + (y − k)<sup>2</sup> = r<sup>2</sup>, so center (2, −3) gives (x − 2)<sup>2</sup> + (y + 3)<sup>2</sup> and r<sup>2</sup> = 16.</p><p>The trap uses 4 instead of 4<sup>2</sup> = 16 for the right side, forgetting to square the radius.</p>"
    },
    {
      n: 21,
      prompt: "<div class='fig'><svg viewBox='0 0 200 200' class='diagram' role='img' aria-label='Circle of radius 6 with a 60 degree central sector'><circle cx='100' cy='100' r='70' fill='none' stroke='currentColor' stroke-width='2'/><line x1='100' y1='100' x2='170' y2='100' stroke='currentColor' stroke-width='2'/><line x1='100' y1='100' x2='135' y2='39' stroke='currentColor' stroke-width='2'/><text x='126' y='92' fill='currentColor' font-size='12'>60°</text><text x='150' y='118' fill='currentColor' font-size='12'>6</text></svg></div><p>A circle has a radius of 6. What is the length of the arc intercepted by a central angle of 60°?</p>",
      choices: ["2π", "6π", "π", "12π"],
      answer: 0,
      topic: "Arc length & sectors",
      difficulty: "medium",
      explanation: "<p>Arc length = (60/360) × 2π(6) = (1/6)(12π) = 2π.</p><p>The trap is 6π, which is the sector area (60/360)π(6)<sup>2</sup>, not the arc length; 12π is the full circumference.</p>"
    },
    {
      n: 22,
      prompt: "<div class='fig'><svg viewBox='0 0 320 170' class='diagram' role='img' aria-label='Two similar right triangles with corresponding sides labeled'><polygon points='20,150 120,150 20,70' fill='none' stroke='currentColor' stroke-width='2'/><polygon points='180,150 300,150 180,30' fill='none' stroke='currentColor' stroke-width='2'/><text x='62' y='165' fill='currentColor' font-size='12'>6</text><text x='6' y='115' fill='currentColor' font-size='12'>8</text><text x='232' y='165' fill='currentColor' font-size='12'>9</text><text x='166' y='95' fill='currentColor' font-size='12'>x</text></svg></div><p>The two triangles above are similar. The base of 6 corresponds to the base of 9, and the side of 8 corresponds to the side labeled x. What is x?</p>",
      choices: ["5.33", "12", "10.5", "14"],
      answer: 1,
      topic: "Similar triangles",
      difficulty: "medium",
      explanation: "<p>The scale factor is 9/6 = 1.5, so x = 8 × 1.5 = 12.</p><p>The trap is 5.33, which divides by the scale factor (8 ÷ 1.5) instead of multiplying.</p>"
    },
    {
      n: 23,
      prompt: "<p>The line of best fit for a scatterplot is y = 2x + 5. Based on this model, what is the predicted value of y when x = 10?</p>",
      choices: ["20", "7", "25", "15"],
      answer: 2,
      topic: "Statistics & data displays",
      difficulty: "medium",
      explanation: "<p>Substitute x = 10: y = 2(10) + 5 = 25.</p><p>The trap is 20, which uses only 2x and forgets to add the intercept of 5; 7 adds 2 + 5.</p>"
    },
    {
      n: 24,
      prompt: "<p>If |x − 4| = 6, what is the sum of all solutions for x?</p>",
      choices: ["8", "4", "6", "−2"],
      answer: 0,
      topic: "Absolute value",
      difficulty: "medium",
      explanation: "<p>The equation gives x − 4 = 6 (x = 10) or x − 4 = −6 (x = −2), and 10 + (−2) = 8.</p><p>The trap is to find only x = 10 or to report a single solution such as −2 instead of the sum.</p>"
    },
    {
      n: 25,
      prompt: "<p>Simplify the expression (x<sup>2</sup> − 9)/(x − 3) for x ≠ 3.</p>",
      choices: ["x − 3", "x<sup>2</sup> − 3", "3", "x + 3"],
      answer: 3,
      topic: "Rational expressions",
      difficulty: "medium",
      explanation: "<p>Factor the numerator as a difference of squares: (x − 3)(x + 3)/(x − 3) = x + 3.</p><p>The trap is x − 3, which cancels the wrong factor; the numerator factors to (x − 3)(x + 3).</p>"
    },
    {
      n: 26,
      prompt: "<p>Solve the inequality −2x + 3 > 7.</p>",
      choices: ["x > −2", "x < −2", "x < 2", "x > 2"],
      answer: 1,
      topic: "Inequalities",
      difficulty: "medium",
      explanation: "<p>Subtract 3: −2x > 4, then divide by −2 and flip the inequality to get x < −2.</p><p>The trap is x > −2, which forgets to reverse the inequality sign when dividing by a negative number.</p>"
    },
    {
      n: 27,
      prompt: "<p>In the arithmetic sequence 4, 7, 10, 13, ..., what is the 20th term?</p>",
      choices: ["64", "58", "61", "60"],
      answer: 2,
      topic: "Sequences",
      difficulty: "medium",
      explanation: "<p>Use a<sub>n</sub> = a<sub>1</sub> + (n − 1)d = 4 + (20 − 1)(3) = 4 + 57 = 61.</p><p>The trap is 64, which uses 20d instead of (20 − 1)d — a common off-by-one error.</p>"
    },
    {
      n: 28,
      prompt: "<p>What is the determinant of the matrix [[1, 2], [3, 4]]?</p>",
      choices: ["−2", "2", "10", "−10"],
      answer: 0,
      topic: "Matrices",
      difficulty: "medium",
      explanation: "<p>The determinant of [[a, b], [c, d]] is ad − bc = (1)(4) − (2)(3) = 4 − 6 = −2.</p><p>The trap is 10, which adds the products (ad + bc) instead of subtracting.</p>"
    },
    {
      n: 29,
      prompt: "<p>What is (3 + 2i) + (1 − 5i)?</p>",
      choices: ["4 + 3i", "2 + 7i", "4 − 7i", "4 − 3i"],
      answer: 3,
      topic: "Complex numbers",
      difficulty: "medium",
      explanation: "<p>Add real parts and imaginary parts separately: (3 + 1) + (2 − 5)i = 4 − 3i.</p><p>The trap is 4 + 3i, which ignores the sign of the −5i term when combining.</p>"
    },
    {
      n: 30,
      prompt: "<p>What is the distance between the points (−1, 2) and (3, 5)?</p>",
      choices: ["7", "5", "√7", "25"],
      answer: 1,
      topic: "Coordinate geometry",
      difficulty: "hard",
      explanation: "<p>Distance = √((3 − (−1))<sup>2</sup> + (5 − 2)<sup>2</sup>) = √(16 + 9) = √25 = 5.</p><p>The trap is 7, which adds the leg lengths (4 + 3) instead of using the Pythagorean theorem; 25 forgets the square root.</p>"
    },
    {
      n: 31,
      prompt: "<div class='fig'><svg viewBox='0 0 160 200' class='diagram' role='img' aria-label='Cylinder with radius 3 and height 5'><ellipse cx='80' cy='40' rx='50' ry='16' fill='none' stroke='currentColor' stroke-width='2'/><line x1='30' y1='40' x2='30' y2='150' stroke='currentColor' stroke-width='2'/><line x1='130' y1='40' x2='130' y2='150' stroke='currentColor' stroke-width='2'/><path d='M30 150 A50 16 0 0 0 130 150' fill='none' stroke='currentColor' stroke-width='2'/><text x='74' y='38' fill='currentColor' font-size='12'>3</text><text x='136' y='100' fill='currentColor' font-size='12'>5</text></svg></div><p>A cylinder has a radius of 3 and a height of 5. What is its volume?</p>",
      choices: ["45π", "30π", "75π", "15π"],
      answer: 0,
      topic: "Volume & surface area",
      difficulty: "medium",
      explanation: "<p>Volume = πr<sup>2</sup>h = π(3)<sup>2</sup>(5) = 45π.</p><p>The trap is 30π, the lateral surface area 2πrh; and 15π forgets to square the radius (πrh).</p>"
    },
    {
      n: 32,
      prompt: "<p>A student scored an average of 80 on 3 tests and an average of 90 on 2 other tests. What is the average of all 5 tests?</p>",
      choices: ["85", "82", "84", "86"],
      answer: 2,
      topic: "Averages",
      difficulty: "hard",
      explanation: "<p>Total points = 3(80) + 2(90) = 240 + 180 = 420, and 420 ÷ 5 = 84.</p><p>The trap is 85, the simple average of 80 and 90, which ignores that there are more tests at 80.</p>"
    },
    {
      n: 33,
      prompt: "<p>What is the value of log<sub>2</sub> 32?</p>",
      choices: ["6", "4", "16", "5"],
      answer: 3,
      topic: "Logarithms",
      difficulty: "medium",
      explanation: "<p>log<sub>2</sub> 32 asks for the power of 2 that gives 32; since 2<sup>5</sup> = 32, the answer is 5.</p><p>The trap is 16, which is 32 ÷ 2 rather than the exponent.</p>"
    },
    {
      n: 34,
      prompt: "<p>The graph of y = (x − 3)<sup>2</sup> + 2 is the graph of y = x<sup>2</sup> shifted in which way?</p>",
      choices: ["left 3, up 2", "right 3, up 2", "right 3, down 2", "left 3, down 2"],
      answer: 1,
      topic: "Transformations of graphs",
      difficulty: "medium",
      explanation: "<p>In y = (x − h)<sup>2</sup> + k, h = 3 shifts right and k = 2 shifts up, so the graph moves right 3 and up 2.</p><p>The trap is left 3, because the −3 inside the parentheses shifts right, not left.</p>"
    },
    {
      n: 35,
      prompt: "<p>How many different ways can 2 students be chosen from a group of 5 students?</p>",
      choices: ["10", "20", "25", "5"],
      answer: 0,
      topic: "Counting & combinations",
      difficulty: "medium",
      explanation: "<p>Order does not matter, so use combinations: C(5, 2) = (5 × 4)/(2 × 1) = 10.</p><p>The trap is 20, which uses permutations (5 × 4) and counts each pair twice.</p>"
    },
    {
      n: 36,
      prompt: "<div class='fig'><svg viewBox='0 0 240 180' class='diagram' role='img' aria-label='Two parallel lines cut by a transversal with same-side interior angles labeled'><line x1='20' y1='60' x2='220' y2='60' stroke='currentColor' stroke-width='2'/><line x1='20' y1='120' x2='220' y2='120' stroke='currentColor' stroke-width='2'/><line x1='60' y1='30' x2='180' y2='150' stroke='currentColor' stroke-width='2'/><text x='96' y='54' fill='currentColor' font-size='12'>3x</text><text x='118' y='138' fill='currentColor' font-size='12'>2x</text></svg></div><p>In the figure, two parallel lines are cut by a transversal. The two marked same-side interior angles measure 3x° and 2x°. What is the value of x?</p>",
      choices: ["30", "18", "36", "45"],
      answer: 2,
      topic: "Angles & parallel lines",
      difficulty: "hard",
      explanation: "<p>Same-side interior angles are supplementary, so 3x + 2x = 180, giving 5x = 180 and x = 36.</p><p>The trap is 30, which comes from setting the angles equal (as if they were alternate interior angles) rather than supplementary.</p>"
    },
    {
      n: 37,
      prompt: "<p>In a 45°-45°-90° right triangle, each leg has length 5. What is the length of the hypotenuse?</p>",
      choices: ["5√3", "5√2", "10", "5/√2"],
      answer: 1,
      topic: "Right-triangle trig",
      difficulty: "medium",
      explanation: "<p>In a 45-45-90 triangle the hypotenuse is leg × √2 = 5√2.</p><p>The trap is 5√3, which is the ratio for a 30-60-90 triangle, and 10 doubles the leg instead of multiplying by √2.</p>"
    },
    {
      n: 38,
      prompt: "<p>Two fair coins are tossed. What is the probability of getting exactly one head?</p>",
      choices: ["1/4", "3/4", "1/3", "1/2"],
      answer: 3,
      topic: "Probability",
      difficulty: "medium",
      explanation: "<p>The equally likely outcomes are HH, HT, TH, TT; exactly one head occurs in HT and TH, so 2/4 = 1/2.</p><p>The trap is 1/4, which counts only one favorable arrangement instead of both HT and TH.</p>"
    },
    {
      n: 39,
      prompt: "<p>A $200 item is discounted 20%, and then 6% sales tax is added to the discounted price. What is the final price?</p>",
      choices: ["$169.60", "$160.00", "$172.00", "$152.00"],
      answer: 0,
      topic: "Percent change",
      difficulty: "hard",
      explanation: "<p>Discounted price = 200 × 0.80 = 160, then with tax 160 × 1.06 = $169.60.</p><p>The trap is $160.00, which stops before adding the sales tax.</p>"
    },
    {
      n: 40,
      prompt: "<p>For the quadratic y = x<sup>2</sup> − 6x + 5, what is the x-coordinate of the vertex?</p>",
      choices: ["−3", "6", "3", "−6"],
      answer: 2,
      topic: "Quadratic functions",
      difficulty: "medium",
      explanation: "<p>The vertex x-coordinate is −b/(2a) = −(−6)/(2·1) = 3.</p><p>The trap is −3, which drops the negative sign in the formula and gets the wrong sign.</p>"
    },
    {
      n: 41,
      prompt: "<p>A theater sells adult tickets for $12 and child tickets for $8. On one night 200 tickets were sold for a total of $2040. How many child tickets were sold?</p>",
      choices: ["110", "90", "45", "150"],
      answer: 1,
      topic: "Systems of equations",
      difficulty: "hard",
      explanation: "<p>Let a + c = 200 and 12a + 8c = 2040. Substituting a = 200 − c gives 12(200 − c) + 8c = 2040, so 2400 − 4c = 2040 and c = 90.</p><p>The trap is 110, which is the number of adult tickets, not child tickets.</p>"
    },
    {
      n: 42,
      prompt: "<p>For what positive value of k does x<sup>2</sup> + kx + 9 = 0 have exactly one real solution?</p>",
      choices: ["3", "9", "12", "6"],
      answer: 3,
      topic: "Quadratic functions",
      difficulty: "hard",
      explanation: "<p>One real solution means the discriminant is zero: k<sup>2</sup> − 4(1)(9) = 0, so k<sup>2</sup> = 36 and k = 6.</p><p>The trap is 9, the constant term, or 3, which forgets to take the square root of 36.</p>"
    },
    {
      n: 43,
      prompt: "<div class='fig'><svg viewBox='0 0 200 200' class='diagram' role='img' aria-label='A 12 foot ladder leaning against a vertical wall at 60 degrees to the ground'><line x1='40' y1='180' x2='40' y2='30' stroke='currentColor' stroke-width='2'/><line x1='40' y1='180' x2='180' y2='180' stroke='currentColor' stroke-width='2'/><line x1='180' y1='180' x2='40' y2='40' stroke='currentColor' stroke-width='2'/><text x='146' y='176' fill='currentColor' font-size='12'>60°</text><text x='118' y='104' fill='currentColor' font-size='12'>12</text></svg></div><p>A 12-foot ladder leans against a wall, making a 60° angle with the ground. How high up the wall does the ladder reach?</p>",
      choices: ["6√3", "6", "12√3", "6√2"],
      answer: 0,
      topic: "Right-triangle trig",
      difficulty: "hard",
      explanation: "<p>The height is opposite the 60° angle: height = 12 sin 60° = 12(√3/2) = 6√3 feet.</p><p>The trap is 6, which uses cos 60° = 1/2 (the horizontal distance) instead of sin 60° for the vertical height.</p>"
    },
    {
      n: 44,
      prompt: "<p>Solve for x: 2<sup>(x + 1)</sup> = 32.</p>",
      choices: ["5", "16", "4", "6"],
      answer: 2,
      topic: "Exponent rules",
      difficulty: "hard",
      explanation: "<p>Write 32 as 2<sup>5</sup>, so x + 1 = 5 and x = 4.</p><p>The trap is 5, which stops at the exponent x + 1 = 5 and forgets to subtract 1.</p>"
    },
    {
      n: 45,
      prompt: "<p>The circle x<sup>2</sup> + y<sup>2</sup> − 4x + 6y − 12 = 0 is written in general form. What is its radius?</p>",
      choices: ["25", "√12", "13", "5"],
      answer: 3,
      topic: "Circle equations",
      difficulty: "hard",
      explanation: "<p>Complete the square: (x − 2)<sup>2</sup> + (y + 3)<sup>2</sup> = 12 + 4 + 9 = 25, so r = √25 = 5.</p><p>The trap is 25, which is r<sup>2</sup> rather than r; √12 forgets to add the constants from completing the square.</p>"
    }
  ] } ]
};

window.ACT_DATA.test2_math = {
  id: "test2_math",
  name: "Mathematics",
  timeMinutes: 50,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>What is 30% of 150?</p>",
      choices: ["45", "5", "120", "4500"],
      answer: 0,
      topic: "Percentages",
      difficulty: "easy",
      explanation: "<p>30% of 150 = 0.30 × 150 = 45.</p><p>The trap is 4500, which multiplies 30 × 150 without converting the percent to a decimal; 120 subtracts 30 from 150.</p>"
    },
    {
      n: 2,
      prompt: "<p>If 4 pens cost $6, how much do 10 pens cost at the same rate?</p>",
      choices: ["$24", "$15", "$2.40", "$60"],
      answer: 1,
      topic: "Ratios & proportions",
      difficulty: "easy",
      explanation: "<p>Each pen costs 6/4 = $1.50, so 10 pens cost 10 × 1.50 = $15.</p><p>The trap is $24, which multiplies the price by the original count (6 × 4) instead of finding a unit rate.</p>"
    },
    {
      n: 3,
      prompt: "<p>The mean of 7, 11, and x is 10. What is the value of x?</p>",
      choices: ["10", "9", "12", "18"],
      answer: 2,
      topic: "Averages",
      difficulty: "easy",
      explanation: "<p>The sum must be 3 × 10 = 30, so x = 30 − 7 − 11 = 12.</p><p>The trap is 10, the mean itself, chosen without solving for the missing value.</p>"
    },
    {
      n: 4,
      prompt: "<p>How many minutes are in 2.5 hours?</p>",
      choices: ["25", "250", "120", "150"],
      answer: 3,
      topic: "Unit conversion",
      difficulty: "easy",
      explanation: "<p>Multiply by 60 minutes per hour: 2.5 × 60 = 150 minutes.</p><p>The trap is 120, which counts only the 2 whole hours and ignores the extra half hour.</p>"
    },
    {
      n: 5,
      prompt: "<p>A square has an area of 49. What is its perimeter?</p>",
      choices: ["14", "28", "49", "196"],
      answer: 1,
      topic: "Volume & surface area",
      difficulty: "easy",
      explanation: "<p>The side is √49 = 7, so the perimeter is 4 × 7 = 28.</p><p>The trap is 14, which is only 2 × 7, or 196, which is 49 × 4 (area times 4 instead of side times 4).</p>"
    },
    {
      n: 6,
      prompt: "<p>A standard number cube with faces 1 through 6 is rolled once. What is the probability of rolling an even number?</p>",
      choices: ["1/2", "1/3", "2/3", "1/6"],
      answer: 0,
      topic: "Probability",
      difficulty: "easy",
      explanation: "<p>The even outcomes are 2, 4, and 6, so P(even) = 3/6 = 1/2.</p><p>The trap is 1/3, which miscounts only two even faces or divides 2 by 6.</p>"
    },
    {
      n: 7,
      prompt: "<p>Simplify: x<sup>5</sup> / x<sup>2</sup>.</p>",
      choices: ["x<sup>7</sup>", "x<sup>10</sup>", "x<sup>2.5</sup>", "x<sup>3</sup>"],
      answer: 3,
      topic: "Exponent rules",
      difficulty: "easy",
      explanation: "<p>When dividing powers with the same base, subtract exponents: x<sup>5−2</sup> = x<sup>3</sup>.</p><p>The trap is x<sup>7</sup>, which adds the exponents instead of subtracting.</p>"
    },
    {
      n: 8,
      prompt: "<p>If 2(x + 3) = 16, what is the value of x?</p>",
      choices: ["8", "11", "5", "10"],
      answer: 2,
      topic: "Linear equations",
      difficulty: "easy",
      explanation: "<p>Divide by 2: x + 3 = 8, then subtract 3 to get x = 5.</p><p>The trap is 8, which is x + 3 before subtracting 3; distributing incorrectly can also give 11.</p>"
    },
    {
      n: 9,
      prompt: "<p>What is 3.5 × 10<sup>3</sup> written in standard form?</p>",
      choices: ["350", "3500", "35000", "0.0035"],
      answer: 1,
      topic: "Exponent rules",
      difficulty: "easy",
      explanation: "<p>Move the decimal point 3 places to the right: 3.5 × 10<sup>3</sup> = 3500.</p><p>The trap is 350, which shifts the decimal only 2 places, and 0.0035 shifts in the wrong direction.</p>"
    },
    {
      n: 10,
      prompt: "<p>20 is what percent of 80?</p>",
      choices: ["40%", "400%", "20%", "25%"],
      answer: 3,
      topic: "Percentages",
      difficulty: "easy",
      explanation: "<p>Compute 20/80 = 0.25 = 25%.</p><p>The trap is 400%, which divides 80 by 20 (the wrong order); 20% just reuses the number 20.</p>"
    },
    {
      n: 11,
      prompt: "<p>What is the range of the data set 4, 9, 2, 15, 7?</p>",
      choices: ["13", "7", "9", "2"],
      answer: 0,
      topic: "Statistics & data displays",
      difficulty: "easy",
      explanation: "<p>Range = maximum − minimum = 15 − 2 = 13.</p><p>The trap is 7, the median of the set, which is a different measure.</p>"
    },
    {
      n: 12,
      prompt: "<p>A rectangular box has dimensions 2 by 3 by 4. What is its volume?</p>",
      choices: ["9", "12", "24", "26"],
      answer: 2,
      topic: "Volume & surface area",
      difficulty: "easy",
      explanation: "<p>Volume = length × width × height = 2 × 3 × 4 = 24.</p><p>The trap is 9, which adds the dimensions (2 + 3 + 4), and 12 uses only two of the three factors.</p>"
    },
    {
      n: 13,
      prompt: "<p>What is the midpoint of the segment with endpoints (2, 4) and (6, 10)?</p>",
      choices: ["(4, 14)", "(4, 7)", "(8, 14)", "(2, 3)"],
      answer: 1,
      topic: "Coordinate geometry",
      difficulty: "medium",
      explanation: "<p>Midpoint = ((2 + 6)/2, (4 + 10)/2) = (4, 7).</p><p>The trap is (8, 14), which sums the coordinates but forgets to divide by 2.</p>"
    },
    {
      n: 14,
      prompt: "<p>Solve the system: 3x − y = 7 and x + y = 5. What is the value of y?</p>",
      choices: ["3", "5", "−1", "2"],
      answer: 3,
      topic: "Systems of equations",
      difficulty: "medium",
      explanation: "<p>Add the equations: 4x = 12, so x = 3, then y = 5 − 3 = 2.</p><p>The trap is 3, which is the value of x rather than y.</p>"
    },
    {
      n: 15,
      prompt: "<p>What is the positive solution of x<sup>2</sup> + 2x − 8 = 0?</p>",
      choices: ["4", "−4", "2", "8"],
      answer: 2,
      topic: "Quadratic functions",
      difficulty: "medium",
      explanation: "<p>Factor: (x + 4)(x − 2) = 0, so x = −4 or x = 2; the positive solution is 2.</p><p>The trap is 4, which drops the sign inside the factor (x + 4); 8 is the constant term.</p>"
    },
    {
      n: 16,
      prompt: "<div class='fig'><svg viewBox='0 0 240 180' class='diagram' role='img' aria-label='Right triangle with horizontal leg 8, vertical leg 15, hypotenuse 17, angle theta at lower right'><polygon points='30,150 210,150 30,40' fill='none' stroke='currentColor' stroke-width='2'/><rect x='30' y='138' width='12' height='12' fill='none' stroke='currentColor'/><text x='115' y='168' fill='currentColor' font-size='13'>8</text><text x='12' y='100' fill='currentColor' font-size='13'>15</text><text x='118' y='88' fill='currentColor' font-size='13'>17</text><text x='182' y='144' fill='currentColor' font-size='13'>θ</text></svg></div><p>In the right triangle above, the side adjacent to angle θ has length 8 and the hypotenuse has length 17. What is cos θ?</p>",
      choices: ["8/17", "15/17", "8/15", "17/8"],
      answer: 0,
      topic: "Right-triangle trig",
      difficulty: "medium",
      explanation: "<p>By CAH, cos θ = adjacent/hypotenuse = 8/17.</p><p>The trap is 15/17 (that is sin θ) and 8/15 (that is tan θ).</p>"
    },
    {
      n: 17,
      prompt: "<p>A stock price falls 20% one day and then rises 20% the next day. What is the net percent change from the starting price?</p>",
      choices: ["0%", "−4%", "+4%", "−40%"],
      answer: 1,
      topic: "Percent change",
      difficulty: "medium",
      explanation: "<p>Multiply the factors: 0.80 × 1.20 = 0.96, which is a 4% decrease overall.</p><p>The trap is 0%, which incorrectly assumes the −20% and +20% cancel, but they apply to different base amounts.</p>"
    },
    {
      n: 18,
      prompt: "<p>A car worth $20,000 depreciates 10% each year. What is its value after 2 years?</p>",
      choices: ["$16,000", "$18,000", "$16,200", "$14,000"],
      answer: 2,
      topic: "Exponential models",
      difficulty: "hard",
      explanation: "<p>Value = 20000 × 0.90<sup>2</sup> = 20000 × 0.81 = $16,200.</p><p>The trap is $16,000, which subtracts a flat 20% ($4,000) instead of applying 10% twice.</p>"
    },
    {
      n: 19,
      prompt: "<p>If f(x) = x<sup>2</sup> − 3x, what is f(−2)?</p>",
      choices: ["−2", "−10", "2", "10"],
      answer: 3,
      topic: "Function notation",
      difficulty: "medium",
      explanation: "<p>Substitute: (−2)<sup>2</sup> − 3(−2) = 4 + 6 = 10.</p><p>The trap is −10, which mishandles the sign of −3(−2), treating it as −6 instead of +6.</p>"
    },
    {
      n: 20,
      prompt: "<div class='fig'><svg viewBox='0 0 200 200' class='diagram' role='img' aria-label='Circle with an inscribed angle subtending an arc of 80 degrees'><circle cx='100' cy='100' r='70' fill='none' stroke='currentColor' stroke-width='2'/><polygon points='100,30 44,140 156,140' fill='none' stroke='currentColor' stroke-width='2'/><text x='92' y='54' fill='currentColor' font-size='12'>?</text><text x='82' y='160' fill='currentColor' font-size='12'>arc = 80°</text></svg></div><p>In the circle above, an inscribed angle intercepts an arc measuring 80°. What is the measure of the inscribed angle?</p>",
      choices: ["40°", "80°", "160°", "20°"],
      answer: 0,
      topic: "Arc length & sectors",
      difficulty: "medium",
      explanation: "<p>An inscribed angle is half of its intercepted arc: 80° ÷ 2 = 40°.</p><p>The trap is 80°, treating it like a central angle, or 160°, which doubles instead of halving.</p>"
    },
    {
      n: 21,
      prompt: "<p>A circle has a radius of 10. What is the area of a sector with a central angle of 36°?</p>",
      choices: ["100π", "2π", "10π", "3.6π"],
      answer: 2,
      topic: "Arc length & sectors",
      difficulty: "medium",
      explanation: "<p>Sector area = (36/360) × π(10)<sup>2</sup> = (1/10)(100π) = 10π.</p><p>The trap is 2π, which is the arc length (36/360 × 2π·10), not the sector area; 100π is the whole circle.</p>"
    },
    {
      n: 22,
      prompt: "<div class='fig'><svg viewBox='0 0 320 180' class='diagram' role='img' aria-label='A 6 foot person casting a 4 foot shadow next to a tree casting a 20 foot shadow'><line x1='30' y1='150' x2='30' y2='100' stroke='currentColor' stroke-width='2'/><line x1='30' y1='150' x2='70' y2='150' stroke='currentColor' stroke-width='2'/><line x1='200' y1='150' x2='200' y2='40' stroke='currentColor' stroke-width='2'/><line x1='200' y1='150' x2='300' y2='150' stroke='currentColor' stroke-width='2'/><text x='12' y='128' fill='currentColor' font-size='12'>6</text><text x='42' y='165' fill='currentColor' font-size='12'>4</text><text x='185' y='98' fill='currentColor' font-size='12'>h</text><text x='240' y='165' fill='currentColor' font-size='12'>20</text></svg></div><p>A 6-foot-tall person casts a 4-foot shadow at the same time a nearby tree casts a 20-foot shadow. How tall is the tree?</p>",
      choices: ["13.3", "30", "26.7", "15"],
      answer: 1,
      topic: "Similar triangles",
      difficulty: "hard",
      explanation: "<p>Set up the proportion 6/4 = h/20, so h = 20 × 1.5 = 30 feet.</p><p>The trap is 13.3, which inverts the ratio (4/6 × 20) instead of using height over shadow.</p>"
    },
    {
      n: 23,
      prompt: "<p>The line of best fit for a data set is y = −3x + 40. What is the predicted value of y when x = 5?</p>",
      choices: ["55", "40", "−15", "25"],
      answer: 3,
      topic: "Statistics & data displays",
      difficulty: "medium",
      explanation: "<p>Substitute x = 5: y = −3(5) + 40 = −15 + 40 = 25.</p><p>The trap is −15, which stops at −3x and never adds the intercept of 40; 55 adds instead of subtracting.</p>"
    },
    {
      n: 24,
      prompt: "<p>If |2x − 1| = 9, what is the product of the two solutions for x?</p>",
      choices: ["−20", "20", "1", "−4"],
      answer: 0,
      topic: "Absolute value",
      difficulty: "medium",
      explanation: "<p>Solve 2x − 1 = 9 (x = 5) and 2x − 1 = −9 (x = −4); the product is 5 × (−4) = −20.</p><p>The trap is 20, which ignores the negative sign of the second solution.</p>"
    },
    {
      n: 25,
      prompt: "<p>Simplify the expression (2x<sup>2</sup> + 6x)/(2x) for x ≠ 0.</p>",
      choices: ["x + 6", "2x + 3", "x + 3", "x<sup>2</sup> + 3"],
      answer: 2,
      topic: "Rational expressions",
      difficulty: "medium",
      explanation: "<p>Factor 2x from the numerator: 2x(x + 3)/(2x) = x + 3.</p><p>The trap is x + 6, which divides only the first term by 2x and mishandles the second term.</p>"
    },
    {
      n: 26,
      prompt: "<p>Solve the compound inequality 3 ≤ 2x − 1 < 7.</p>",
      choices: ["2 < x < 4", "2 ≤ x ≤ 4", "1 ≤ x < 3", "2 ≤ x < 4"],
      answer: 3,
      topic: "Inequalities",
      difficulty: "hard",
      explanation: "<p>Add 1 to all parts: 4 ≤ 2x < 8, then divide by 2 to get 2 ≤ x < 4.</p><p>The trap is 2 ≤ x ≤ 4, which wrongly makes the upper bound inclusive even though the original was strictly less than 7.</p>"
    },
    {
      n: 27,
      prompt: "<p>In the geometric sequence 3, 6, 12, 24, ..., what is the 6th term?</p>",
      choices: ["48", "96", "192", "64"],
      answer: 1,
      topic: "Sequences",
      difficulty: "medium",
      explanation: "<p>Use a<sub>n</sub> = a<sub>1</sub> · r<sup>(n−1)</sup> = 3 · 2<sup>5</sup> = 3 · 32 = 96.</p><p>The trap is 48, which uses 2<sup>4</sup> (an off-by-one on the exponent).</p>"
    },
    {
      n: 28,
      prompt: "<p>What is 2 × [[1, −2], [0, 3]]?</p>",
      choices: ["[[2, −4], [0, 6]]", "[[2, −2], [0, 3]]", "[[3, 0], [−2, 5]]", "[[1, −4], [0, 6]]"],
      answer: 0,
      topic: "Matrices",
      difficulty: "medium",
      explanation: "<p>Scalar multiplication multiplies every entry by 2: [[2, −4], [0, 6]].</p><p>The trap is [[2, −2], [0, 3]], which doubles only the first entry instead of every entry.</p>"
    },
    {
      n: 29,
      prompt: "<p>What is (2 + 3i)(1 − i)?</p>",
      choices: ["5 − i", "2 − 3i", "5 + i", "−1 + 5i"],
      answer: 2,
      topic: "Complex numbers",
      difficulty: "hard",
      explanation: "<p>Expand: 2 − 2i + 3i − 3i<sup>2</sup> = 2 + i + 3 = 5 + i (since i<sup>2</sup> = −1).</p><p>The trap is 5 − i, which treats −3i<sup>2</sup> as −3 instead of +3 and mishandles the imaginary terms.</p>"
    },
    {
      n: 30,
      prompt: "<p>A line has slope −2 and passes through the point (1, 3). What is its y-intercept?</p>",
      choices: ["1", "5", "3", "−2"],
      answer: 1,
      topic: "Coordinate geometry",
      difficulty: "medium",
      explanation: "<p>Use y = mx + b: 3 = −2(1) + b, so b = 5.</p><p>The trap is 1, which comes from 3 + (−2) with the wrong sign handling; the point value 3 is another distractor.</p>"
    },
    {
      n: 31,
      prompt: "<div class='fig'><svg viewBox='0 0 160 200' class='diagram' role='img' aria-label='Cone with base radius 3 and height 4'><ellipse cx='80' cy='160' rx='50' ry='16' fill='none' stroke='currentColor' stroke-width='2'/><line x1='30' y1='160' x2='80' y2='30' stroke='currentColor' stroke-width='2'/><line x1='130' y1='160' x2='80' y2='30' stroke='currentColor' stroke-width='2'/><line x1='80' y1='160' x2='80' y2='30' stroke='currentColor' stroke-width='1'/><text x='90' y='100' fill='currentColor' font-size='12'>4</text><text x='100' y='178' fill='currentColor' font-size='12'>3</text></svg></div><p>A cone has a base radius of 3 and a height of 4. What is its volume?</p>",
      choices: ["36π", "48π", "24π", "12π"],
      answer: 3,
      topic: "Volume & surface area",
      difficulty: "medium",
      explanation: "<p>Volume of a cone = (1/3)πr<sup>2</sup>h = (1/3)π(9)(4) = 12π.</p><p>The trap is 36π, which forgets the 1/3 factor (that is the volume of the enclosing cylinder).</p>"
    },
    {
      n: 32,
      prompt: "<p>A course grade is 40% homework and 60% exams. A student has a homework average of 90 and an exam average of 80. What is the overall grade?</p>",
      choices: ["84", "85", "86", "82"],
      answer: 0,
      topic: "Averages",
      difficulty: "medium",
      explanation: "<p>Weighted grade = 0.40(90) + 0.60(80) = 36 + 48 = 84.</p><p>The trap is 85, the simple average of 90 and 80, which ignores the unequal weights.</p>"
    },
    {
      n: 33,
      prompt: "<p>If log<sub>3</sub> x = 4, what is the value of x?</p>",
      choices: ["12", "64", "81", "7"],
      answer: 2,
      topic: "Logarithms",
      difficulty: "medium",
      explanation: "<p>The equation means x = 3<sup>4</sup> = 81.</p><p>The trap is 12, which multiplies 3 × 4, and 64 computes 4<sup>3</sup> (bases and exponents swapped).</p>"
    },
    {
      n: 34,
      prompt: "<p>The graph of y = |x| is reflected across the x-axis and then shifted up 5 units. What is the equation of the new graph?</p>",
      choices: ["y = |x| + 5", "y = −|x| + 5", "y = |x| − 5", "y = −|x| − 5"],
      answer: 1,
      topic: "Transformations of graphs",
      difficulty: "medium",
      explanation: "<p>Reflecting across the x-axis negates the function to −|x|, and shifting up 5 adds 5: y = −|x| + 5.</p><p>The trap is y = |x| + 5, which forgets the reflection (the negative sign).</p>"
    },
    {
      n: 35,
      prompt: "<p>In how many different orders can 4 distinct books be arranged on a shelf?</p>",
      choices: ["12", "16", "4", "24"],
      answer: 3,
      topic: "Counting & combinations",
      difficulty: "medium",
      explanation: "<p>The number of arrangements is 4! = 4 × 3 × 2 × 1 = 24.</p><p>The trap is 16, which computes 4<sup>2</sup> or 4 × 4 instead of the factorial.</p>"
    },
    {
      n: 36,
      prompt: "<div class='fig'><svg viewBox='0 0 240 180' class='diagram' role='img' aria-label='Two parallel lines cut by a transversal with corresponding angles labeled'><line x1='20' y1='60' x2='220' y2='60' stroke='currentColor' stroke-width='2'/><line x1='20' y1='120' x2='220' y2='120' stroke='currentColor' stroke-width='2'/><line x1='60' y1='20' x2='180' y2='160' stroke='currentColor' stroke-width='2'/><text x='92' y='54' fill='currentColor' font-size='12'>4x−20</text><text x='118' y='112' fill='currentColor' font-size='12'>2x+40</text></svg></div><p>In the figure, two parallel lines are cut by a transversal, and the two marked corresponding angles measure (4x − 20)° and (2x + 40)°. What is the value of x?</p>",
      choices: ["30", "10", "60", "20"],
      answer: 0,
      topic: "Angles & parallel lines",
      difficulty: "medium",
      explanation: "<p>Corresponding angles are equal: 4x − 20 = 2x + 40, so 2x = 60 and x = 30.</p><p>The trap is 10, which comes from setting the angles supplementary instead of equal.</p>"
    },
    {
      n: 37,
      prompt: "<p>In a 30°-60°-90° triangle, the shorter leg has length 6. What is the length of the hypotenuse?</p>",
      choices: ["6√3", "6√2", "12", "3√3"],
      answer: 2,
      topic: "Right-triangle trig",
      difficulty: "medium",
      explanation: "<p>In a 30-60-90 triangle the hypotenuse is twice the shorter leg: 2 × 6 = 12.</p><p>The trap is 6√3, which is the longer leg, not the hypotenuse.</p>"
    },
    {
      n: 38,
      prompt: "<p>A bag contains 5 red and 3 blue marbles. Two marbles are drawn without replacement. What is the probability that both are red?</p>",
      choices: ["25/64", "5/14", "5/8", "10/56"],
      answer: 1,
      topic: "Probability",
      difficulty: "hard",
      explanation: "<p>P(both red) = (5/8)(4/7) = 20/56 = 5/14.</p><p>The trap is 25/64, which uses (5/8)(5/8) as if the first marble were replaced.</p>"
    },
    {
      n: 39,
      prompt: "<p>A principal of $1,000 earns 5% simple interest per year. How much interest is earned in 3 years?</p>",
      choices: ["$150", "$1,150", "$50", "$157.63"],
      answer: 0,
      topic: "Percentages",
      difficulty: "medium",
      explanation: "<p>Simple interest = P·r·t = 1000 × 0.05 × 3 = $150.</p><p>The trap is $1,150, which is the total balance (principal plus interest), not the interest alone; $157.63 uses compound interest.</p>"
    },
    {
      n: 40,
      prompt: "<p>What are the x-intercepts of y = x<sup>2</sup> − x − 12?</p>",
      choices: ["x = −4 and x = 3", "x = 6 and x = −2", "x = 12 and x = −1", "x = 4 and x = −3"],
      answer: 3,
      topic: "Quadratic functions",
      difficulty: "medium",
      explanation: "<p>Factor: (x − 4)(x + 3) = 0, so x = 4 or x = −3.</p><p>The trap is x = −4 and x = 3, which flips both signs by mis-factoring.</p>"
    },
    {
      n: 41,
      prompt: "<p>A chemist mixes a 30% acid solution with a 60% acid solution to make 300 mL of a 50% acid solution. How many milliliters of the 30% solution are used?</p>",
      choices: ["150", "200", "100", "50"],
      answer: 2,
      topic: "Systems of equations",
      difficulty: "hard",
      explanation: "<p>Let x be the 30% solution: 0.30x + 0.60(300 − x) = 0.50(300). Then 180 − 0.30x = 150, so 0.30x = 30 and x = 100 mL.</p><p>The trap is 200, which is the amount of the 60% solution rather than the 30% solution.</p>"
    },
    {
      n: 42,
      prompt: "<p>For which value of c does x<sup>2</sup> − 6x + c = 0 have two distinct real solutions?</p>",
      choices: ["9", "5", "10", "12"],
      answer: 1,
      topic: "Quadratic functions",
      difficulty: "hard",
      explanation: "<p>Two distinct real roots require a positive discriminant: 36 − 4c > 0, so c < 9. Of the choices, only c = 5 satisfies this.</p><p>The trap is 9, which gives a discriminant of 0 (one repeated root, not two distinct).</p>"
    },
    {
      n: 43,
      prompt: "<div class='fig'><svg viewBox='0 0 240 180' class='diagram' role='img' aria-label='Angle of elevation of 40 degrees from a point 50 feet from the base of a tree'><line x1='200' y1='160' x2='200' y2='50' stroke='currentColor' stroke-width='2'/><line x1='40' y1='160' x2='200' y2='160' stroke='currentColor' stroke-width='2'/><line x1='40' y1='160' x2='200' y2='50' stroke='currentColor' stroke-width='2'/><text x='54' y='155' fill='currentColor' font-size='12'>40°</text><text x='104' y='175' fill='currentColor' font-size='12'>50 ft</text><text x='206' y='108' fill='currentColor' font-size='12'>h</text></svg></div><p>From a point 50 feet from the base of a tree, the angle of elevation to the top of the tree is 40°. Approximately how tall is the tree? (Use tan 40° ≈ 0.839.)</p>",
      choices: ["41.9 ft", "59.6 ft", "32.1 ft", "65.3 ft"],
      answer: 0,
      topic: "Right-triangle trig",
      difficulty: "hard",
      explanation: "<p>Height = 50 × tan 40° ≈ 50 × 0.839 ≈ 41.9 ft.</p><p>The trap is 59.6 ft, which divides by tan 40° instead of multiplying, treating the height as the hypotenuse relationship incorrectly.</p>"
    },
    {
      n: 44,
      prompt: "<p>Solve for x: 3<sup>(2x)</sup> = 81.</p>",
      choices: ["4", "8", "1", "2"],
      answer: 3,
      topic: "Exponent rules",
      difficulty: "hard",
      explanation: "<p>Write 81 as 3<sup>4</sup>, so 2x = 4 and x = 2.</p><p>The trap is 4, which stops at the exponent 2x = 4 and forgets to divide by 2.</p>"
    },
    {
      n: 45,
      prompt: "<p>Line A is given by y = 2x + 1. Line B is perpendicular to line A and passes through the point (4, 3). At what value of y does line B cross the y-axis?</p>",
      choices: ["−1/2", "1", "5", "−3"],
      answer: 2,
      topic: "Coordinate geometry",
      difficulty: "hard",
      explanation: "<p>The perpendicular slope is −1/2, so y = −(1/2)x + b. Using (4, 3): 3 = −2 + b, so b = 5.</p><p>The trap is −1/2, which reports the slope instead of the y-intercept.</p>"
    }
  ] } ]
};

window.ACT_DATA.test3_math = {
  id: "test3_math",
  name: "Mathematics",
  timeMinutes: 50,
  units: [ { title: "", html: "", questions: [
    {
      n: 1,
      prompt: "<p>A shirt costs $25. With an 8% sales tax added, what is the total cost?</p>",
      choices: ["$2.00", "$23.00", "$27.00", "$25.08"],
      answer: 2,
      topic: "Percentages",
      difficulty: "easy",
      explanation: "<p>Tax = 0.08 × 25 = $2, so the total is 25 + 2 = $27.00.</p><p>The trap is $2.00, which is only the tax amount, not the total; $25.08 treats 8% as 8 cents.</p>"
    },
    {
      n: 2,
      prompt: "<p>On a map, 1 inch represents 25 miles. How many miles does a distance of 4 inches represent?</p>",
      choices: ["100", "6.25", "29", "12.5"],
      answer: 0,
      topic: "Ratios & proportions",
      difficulty: "easy",
      explanation: "<p>Multiply the scale by the map distance: 25 × 4 = 100 miles.</p><p>The trap is 6.25, which divides 25 by 4 instead of multiplying.</p>"
    },
    {
      n: 3,
      prompt: "<p>A student earns test scores of 85, 90, and 95. What is the mean score?</p>",
      choices: ["85", "90", "95", "270"],
      answer: 1,
      topic: "Averages",
      difficulty: "easy",
      explanation: "<p>Mean = (85 + 90 + 95)/3 = 270/3 = 90.</p><p>The trap is 270, which is the sum of the scores before dividing by 3.</p>"
    },
    {
      n: 4,
      prompt: "<p>A sprinter runs 400 meters in 50 seconds. What is the average speed in meters per second?</p>",
      choices: ["0.125", "20000", "450", "8"],
      answer: 3,
      topic: "Unit conversion",
      difficulty: "easy",
      explanation: "<p>Speed = distance ÷ time = 400 ÷ 50 = 8 meters per second.</p><p>The trap is 0.125, which divides time by distance (50 ÷ 400) instead of distance by time.</p>"
    },
    {
      n: 5,
      prompt: "<p>A triangle has a base of 10 and a height of 6. What is its area?</p>",
      choices: ["60", "16", "30", "32"],
      answer: 2,
      topic: "Volume & surface area",
      difficulty: "easy",
      explanation: "<p>Area of a triangle = (1/2)(base)(height) = (1/2)(10)(6) = 30.</p><p>The trap is 60, which forgets the factor of 1/2.</p>"
    },
    {
      n: 6,
      prompt: "<p>A spinner has 8 equal sections numbered 1 through 8. What is the probability of landing on a number greater than 5?</p>",
      choices: ["3/8", "5/8", "1/8", "3/5"],
      answer: 0,
      topic: "Probability",
      difficulty: "easy",
      explanation: "<p>Numbers greater than 5 are 6, 7, and 8 — that is 3 of the 8 sections, so P = 3/8.</p><p>The trap is 5/8, which counts the numbers 5 or less (or 1 through 5) instead of those greater than 5.</p>"
    },
    {
      n: 7,
      prompt: "<p>Simplify: (2x<sup>2</sup>)(3x<sup>4</sup>).</p>",
      choices: ["6x<sup>8</sup>", "6x<sup>6</sup>", "5x<sup>6</sup>", "6x<sup>2</sup>"],
      answer: 1,
      topic: "Exponent rules",
      difficulty: "easy",
      explanation: "<p>Multiply coefficients and add exponents: (2·3)x<sup>2+4</sup> = 6x<sup>6</sup>.</p><p>The trap is 6x<sup>8</sup>, which multiplies the exponents instead of adding them.</p>"
    },
    {
      n: 8,
      prompt: "<p>If x/4 + 2 = 5, what is the value of x?</p>",
      choices: ["3", "28", "0.75", "12"],
      answer: 3,
      topic: "Linear equations",
      difficulty: "easy",
      explanation: "<p>Subtract 2: x/4 = 3, then multiply by 4 to get x = 12.</p><p>The trap is 3, which is the value of x/4 before multiplying by 4.</p>"
    },
    {
      n: 9,
      prompt: "<p>Which of the following is 6,200,000 written in scientific notation?</p>",
      choices: ["6.2 × 10<sup>5</sup>", "6.2 × 10<sup>7</sup>", "6.2 × 10<sup>6</sup>", "6.02 × 10<sup>6</sup>"],
      answer: 2,
      topic: "Exponent rules",
      difficulty: "easy",
      explanation: "<p>6,200,000 = 6.2 × 10<sup>6</sup> because the decimal moves 6 places.</p><p>The trap is 6.2 × 10<sup>5</sup>, which miscounts the number of places by one.</p>"
    },
    {
      n: 10,
      prompt: "<p>A price increases from $50 to $65. What is the percent increase?</p>",
      choices: ["30%", "15%", "23%", "130%"],
      answer: 0,
      topic: "Percent change",
      difficulty: "easy",
      explanation: "<p>Increase = 65 − 50 = 15, and 15/50 = 0.30 = 30%.</p><p>The trap is 23%, which divides the change by the new value (15/65) instead of the original.</p>"
    },
    {
      n: 11,
      prompt: "<p>What is the mode of the data set 2, 3, 3, 5, 7, 7, 7?</p>",
      choices: ["3", "7", "5", "4.9"],
      answer: 1,
      topic: "Statistics & data displays",
      difficulty: "easy",
      explanation: "<p>The mode is the value that appears most often; 7 appears three times, more than any other value.</p><p>The trap is 4.9, which is the mean (34/7), not the mode.</p>"
    },
    {
      n: 12,
      prompt: "<p>A rectangular prism has length 5, width 4, and height 3. What is its total surface area?</p>",
      choices: ["60", "47", "120", "94"],
      answer: 3,
      topic: "Volume & surface area",
      difficulty: "easy",
      explanation: "<p>Surface area = 2(lw + lh + wh) = 2(20 + 15 + 12) = 2(47) = 94.</p><p>The trap is 60, which is the volume (5·4·3), and 47 forgets to double the sum of the face areas.</p>"
    },
    {
      n: 13,
      prompt: "<p>What is the y-intercept of the line y = 3x − 4?</p>",
      choices: ["−4", "3", "4", "−4/3"],
      answer: 0,
      topic: "Coordinate geometry",
      difficulty: "medium",
      explanation: "<p>In y = mx + b, the y-intercept is b, so it is −4.</p><p>The trap is 3, which is the slope m, not the y-intercept.</p>"
    },
    {
      n: 14,
      prompt: "<p>If 2x + 3y = 12 and x = 3, what is the value of y?</p>",
      choices: ["6", "3", "2", "4"],
      answer: 2,
      topic: "Systems of equations",
      difficulty: "medium",
      explanation: "<p>Substitute x = 3: 6 + 3y = 12, so 3y = 6 and y = 2.</p><p>The trap is 6, the value of 3y before dividing by 3.</p>"
    },
    {
      n: 15,
      prompt: "<p>Which of the following lists all real solutions of x<sup>2</sup> = 49?</p>",
      choices: ["7 only", "7 and −7", "24.5", "−7 only"],
      answer: 1,
      topic: "Quadratic functions",
      difficulty: "medium",
      explanation: "<p>Taking the square root of both sides gives x = 7 or x = −7.</p><p>The trap is 7 only, which forgets that a negative number also squares to 49; 24.5 is 49/2.</p>"
    },
    {
      n: 16,
      prompt: "<div class='fig'><svg viewBox='0 0 240 180' class='diagram' role='img' aria-label='Right triangle with a 30 degree angle at lower left, right angle at lower right, and vertical leg opposite the 30 degree angle labeled 5'><polygon points='30,150 210,150 210,60' fill='none' stroke='currentColor' stroke-width='2'/><rect x='198' y='138' width='12' height='12' fill='none' stroke='currentColor'/><text x='40' y='145' fill='currentColor' font-size='13'>30°</text><text x='216' y='108' fill='currentColor' font-size='13'>5</text></svg></div><p>In the right triangle above, the leg opposite the 30° angle has length 5. What is the length of the hypotenuse?</p>",
      choices: ["5√3", "2.5", "5√2", "10"],
      answer: 3,
      topic: "Right-triangle trig",
      difficulty: "medium",
      explanation: "<p>Since sin 30° = opposite/hypotenuse = 1/2, we have 5/hyp = 1/2, so hyp = 10.</p><p>The trap is 5√3, which is the length of the other (adjacent) leg, not the hypotenuse.</p>"
    },
    {
      n: 17,
      prompt: "<p>35 is 70% of what number?</p>",
      choices: ["50", "24.5", "105", "45"],
      answer: 0,
      topic: "Percentages",
      difficulty: "medium",
      explanation: "<p>Solve 0.70x = 35, so x = 35/0.70 = 50.</p><p>The trap is 24.5, which computes 70% of 35 instead of solving for the whole.</p>"
    },
    {
      n: 18,
      prompt: "<p>A population of 800 decreases by 25% in one year. What is the population after that year?</p>",
      choices: ["775", "200", "600", "1000"],
      answer: 2,
      topic: "Exponential models",
      difficulty: "medium",
      explanation: "<p>Remaining = 800 × (1 − 0.25) = 800 × 0.75 = 600.</p><p>The trap is 200, which is the amount of the decrease, not the remaining population; 775 subtracts 25 as a flat amount.</p>"
    },
    {
      n: 19,
      prompt: "<p>If g(x) = 3x − 4, for what value of x does g(x) = 11?</p>",
      choices: ["29", "5", "2.33", "7"],
      answer: 1,
      topic: "Function notation",
      difficulty: "medium",
      explanation: "<p>Set 3x − 4 = 11, so 3x = 15 and x = 5.</p><p>The trap is 29, which evaluates g(11) = 3(11) − 4 instead of solving for x; 7 comes from 11 − 4.</p>"
    },
    {
      n: 20,
      prompt: "<p>The circle (x + 1)<sup>2</sup> + (y − 4)<sup>2</sup> = 9 has what center and radius?</p>",
      choices: ["center (1, −4), r = 9", "center (1, −4), r = 3", "center (−1, 4), r = 9", "center (−1, 4), r = 3"],
      answer: 3,
      topic: "Circle equations",
      difficulty: "medium",
      explanation: "<p>In (x − h)<sup>2</sup> + (y − k)<sup>2</sup> = r<sup>2</sup>, the center is (−1, 4) and r = √9 = 3.</p><p>The trap is r = 9, which uses r<sup>2</sup> as the radius; the (1, −4) options flip the signs of the center.</p>"
    },
    {
      n: 21,
      prompt: "<div class='fig'><svg viewBox='0 0 200 200' class='diagram' role='img' aria-label='Circle with diameter 20 and a 90 degree central angle'><circle cx='100' cy='100' r='70' fill='none' stroke='currentColor' stroke-width='2'/><line x1='100' y1='100' x2='170' y2='100' stroke='currentColor' stroke-width='2'/><line x1='100' y1='100' x2='100' y2='30' stroke='currentColor' stroke-width='2'/><text x='106' y='92' fill='currentColor' font-size='12'>90°</text><text x='116' y='150' fill='currentColor' font-size='12'>d = 20</text></svg></div><p>A circle has a diameter of 20. What is the length of the arc intercepted by a 90° central angle?</p>",
      choices: ["10π", "20π", "5π", "2.5π"],
      answer: 2,
      topic: "Arc length & sectors",
      difficulty: "hard",
      explanation: "<p>The radius is 20/2 = 10, so arc length = (90/360) × 2π(10) = (1/4)(20π) = 5π.</p><p>The trap is 10π, which uses the diameter of 20 as the radius; this is the classic radius-versus-diameter error.</p>"
    },
    {
      n: 22,
      prompt: "<div class='fig'><svg viewBox='0 0 320 170' class='diagram' role='img' aria-label='Two similar triangles, a small one and a larger scaled copy'><polygon points='20,150 110,150 40,80' fill='none' stroke='currentColor' stroke-width='2'/><polygon points='170,150 300,150 200,50' fill='none' stroke='currentColor' stroke-width='2'/><text x='58' y='165' fill='currentColor' font-size='12'>4</text><text x='228' y='165' fill='currentColor' font-size='12'>10</text></svg></div><p>The two triangles above are similar. The smaller triangle has sides 4, 5, and 6, and its shortest side of 4 corresponds to the larger triangle's shortest side of 10. What is the length of the larger triangle's longest side?</p>",
      choices: ["15", "12", "24", "7.5"],
      answer: 0,
      topic: "Similar triangles",
      difficulty: "medium",
      explanation: "<p>The scale factor is 10/4 = 2.5, so the longest side is 6 × 2.5 = 15.</p><p>The trap is 12, which uses a scale factor of 2 (from 10/5) applied to the wrong side.</p>"
    },
    {
      n: 23,
      prompt: "<p>A box plot shows a minimum of 10, a first quartile (Q1) of 15, a median of 20, a third quartile (Q3) of 30, and a maximum of 45. What is the interquartile range?</p>",
      choices: ["35", "15", "20", "10"],
      answer: 1,
      topic: "Statistics & data displays",
      difficulty: "medium",
      explanation: "<p>Interquartile range = Q3 − Q1 = 30 − 15 = 15.</p><p>The trap is 35, which is the full range (maximum − minimum), not the interquartile range.</p>"
    },
    {
      n: 24,
      prompt: "<p>If |3x + 6| = 12, what is the negative solution for x?</p>",
      choices: ["2", "6", "−2", "−6"],
      answer: 3,
      topic: "Absolute value",
      difficulty: "hard",
      explanation: "<p>Solve 3x + 6 = 12 (x = 2) and 3x + 6 = −12 (3x = −18, x = −6); the negative solution is −6.</p><p>The trap is −2, which comes from solving 3x = −6 by forgetting to move the +6 correctly.</p>"
    },
    {
      n: 25,
      prompt: "<p>Simplify the expression (x<sup>2</sup> − 4x)/(x<sup>2</sup> − 16).</p>",
      choices: ["x/(x + 4)", "x/(x − 4)", "(x − 4)/(x + 4)", "x/4"],
      answer: 0,
      topic: "Rational expressions",
      difficulty: "medium",
      explanation: "<p>Factor both: x(x − 4)/[(x − 4)(x + 4)] = x/(x + 4).</p><p>The trap is x/(x − 4), which cancels the wrong factor from the denominator.</p>"
    },
    {
      n: 26,
      prompt: "<p>Solve the inequality 5 − 2x ≤ 1.</p>",
      choices: ["x ≤ 2", "x ≤ −2", "x ≥ 2", "x ≥ −2"],
      answer: 2,
      topic: "Inequalities",
      difficulty: "medium",
      explanation: "<p>Subtract 5: −2x ≤ −4, then divide by −2 and flip the sign to get x ≥ 2.</p><p>The trap is x ≤ 2, which forgets to reverse the inequality when dividing by a negative.</p>"
    },
    {
      n: 27,
      prompt: "<p>An arithmetic sequence has a first term of 7 and a common difference of −3. What is the 5th term?</p>",
      choices: ["−8", "−5", "19", "−12"],
      answer: 1,
      topic: "Sequences",
      difficulty: "medium",
      explanation: "<p>a<sub>5</sub> = 7 + (5 − 1)(−3) = 7 − 12 = −5.</p><p>The trap is −8, which uses 5 times the difference instead of (5 − 1) times.</p>"
    },
    {
      n: 28,
      prompt: "<p>What is the determinant of the matrix [[2, 1], [4, 3]]?</p>",
      choices: ["10", "6", "−2", "2"],
      answer: 3,
      topic: "Matrices",
      difficulty: "medium",
      explanation: "<p>Determinant = ad − bc = (2)(3) − (1)(4) = 6 − 4 = 2.</p><p>The trap is 10, which adds the products instead of subtracting.</p>"
    },
    {
      n: 29,
      prompt: "<p>What is the value of i<sup>2</sup> + i<sup>4</sup>?</p>",
      choices: ["0", "−2", "2", "2i"],
      answer: 0,
      topic: "Complex numbers",
      difficulty: "medium",
      explanation: "<p>Since i<sup>2</sup> = −1 and i<sup>4</sup> = 1, the sum is −1 + 1 = 0.</p><p>The trap is −2, which treats i<sup>4</sup> as −1 as well, instead of +1.</p>"
    },
    {
      n: 30,
      prompt: "<p>What is the slope of a line perpendicular to y = (2/3)x + 1?</p>",
      choices: ["2/3", "3/2", "−3/2", "−2/3"],
      answer: 2,
      topic: "Coordinate geometry",
      difficulty: "medium",
      explanation: "<p>Perpendicular slopes are negative reciprocals, so the slope is −3/2.</p><p>The trap is −2/3, which only negates the slope without taking the reciprocal.</p>"
    },
    {
      n: 31,
      prompt: "<div class='fig'><svg viewBox='0 0 180 180' class='diagram' role='img' aria-label='Sphere with radius 3'><circle cx='90' cy='90' r='60' fill='none' stroke='currentColor' stroke-width='2'/><ellipse cx='90' cy='90' rx='60' ry='18' fill='none' stroke='currentColor' stroke-width='1'/><line x1='90' y1='90' x2='150' y2='90' stroke='currentColor' stroke-width='2'/><text x='112' y='84' fill='currentColor' font-size='12'>3</text></svg></div><p>A sphere has a radius of 3. What is its volume? (Use V = (4/3)πr<sup>3</sup>.)</p>",
      choices: ["27π", "36π", "108π", "12π"],
      answer: 1,
      topic: "Volume & surface area",
      difficulty: "medium",
      explanation: "<p>V = (4/3)π(3)<sup>3</sup> = (4/3)π(27) = 36π.</p><p>The trap is 108π, which uses 4πr<sup>3</sup> and forgets the 1/3 factor; 27π is just r<sup>3</sup>π.</p>"
    },
    {
      n: 32,
      prompt: "<p>A class of 20 students has a test average of 75. A new student who scored 96 joins the class. What is the new average of all 21 students?</p>",
      choices: ["75.5", "85.5", "78", "76"],
      answer: 3,
      topic: "Averages",
      difficulty: "hard",
      explanation: "<p>New total = 20(75) + 96 = 1500 + 96 = 1596, and 1596/21 = 76.</p><p>The trap is 85.5, the simple average of 75 and 96, which ignores that 20 students already scored 75.</p>"
    },
    {
      n: 33,
      prompt: "<p>Solve for x: log<sub>5</sub> x = 3.</p>",
      choices: ["15", "8", "125", "243"],
      answer: 2,
      topic: "Logarithms",
      difficulty: "medium",
      explanation: "<p>The equation means x = 5<sup>3</sup> = 125.</p><p>The trap is 15, which multiplies 5 × 3, and 243 computes 3<sup>5</sup> (bases and exponents swapped).</p>"
    },
    {
      n: 34,
      prompt: "<p>What is the amplitude of the function y = 3 sin(2x)?</p>",
      choices: ["3", "2", "6", "π"],
      answer: 0,
      topic: "Trig graphs",
      difficulty: "medium",
      explanation: "<p>For y = a sin(bx), the amplitude is |a| = 3.</p><p>The trap is 2, which is the value of b that affects the period, not the amplitude.</p>"
    },
    {
      n: 35,
      prompt: "<p>How many different 3-letter arrangements can be formed using all the letters in the word CAT (no letter repeated)?</p>",
      choices: ["3", "6", "9", "27"],
      answer: 1,
      topic: "Counting & combinations",
      difficulty: "medium",
      explanation: "<p>The number of arrangements is 3! = 3 × 2 × 1 = 6.</p><p>The trap is 27, which computes 3<sup>3</sup> (allowing repeats), and 9 computes 3<sup>2</sup>.</p>"
    },
    {
      n: 36,
      prompt: "<div class='fig'><svg viewBox='0 0 240 180' class='diagram' role='img' aria-label='Two parallel lines cut by a transversal with alternate exterior angles labeled'><line x1='20' y1='60' x2='220' y2='60' stroke='currentColor' stroke-width='2'/><line x1='20' y1='120' x2='220' y2='120' stroke='currentColor' stroke-width='2'/><line x1='60' y1='20' x2='180' y2='160' stroke='currentColor' stroke-width='2'/><text x='58' y='40' fill='currentColor' font-size='12'>5x−10</text><text x='150' y='152' fill='currentColor' font-size='12'>3x+30</text></svg></div><p>In the figure, two parallel lines are cut by a transversal, and the two marked alternate exterior angles measure (5x − 10)° and (3x + 30)°. What is the value of x?</p>",
      choices: ["10", "15", "25", "20"],
      answer: 3,
      topic: "Angles & parallel lines",
      difficulty: "hard",
      explanation: "<p>Alternate exterior angles are equal: 5x − 10 = 3x + 30, so 2x = 40 and x = 20.</p><p>The trap is 10, which comes from setting the two angles supplementary instead of equal.</p>"
    },
    {
      n: 37,
      prompt: "<p>The diagonal of a square has length 8√2. What is the length of one side of the square?</p>",
      choices: ["16", "4", "8", "8√2"],
      answer: 2,
      topic: "Right-triangle trig",
      difficulty: "medium",
      explanation: "<p>For a square, diagonal = side × √2, so side = 8√2 / √2 = 8.</p><p>The trap is 16, which multiplies by √2 again instead of dividing.</p>"
    },
    {
      n: 38,
      prompt: "<p>A fair six-sided die is rolled twice. What is the probability of rolling a 6 on both rolls?</p>",
      choices: ["1/36", "1/12", "1/3", "1/6"],
      answer: 0,
      topic: "Probability",
      difficulty: "medium",
      explanation: "<p>The rolls are independent, so P = (1/6)(1/6) = 1/36.</p><p>The trap is 1/12, which adds the probabilities instead of multiplying them.</p>"
    },
    {
      n: 39,
      prompt: "<p>You invest $2,000 at 4% simple annual interest. What is the total value of the investment after 5 years?</p>",
      choices: ["$400", "$2,400", "$2,080", "$2,433.31"],
      answer: 1,
      topic: "Percentages",
      difficulty: "medium",
      explanation: "<p>Simple interest = 2000 × 0.04 × 5 = $400, so the total value is 2000 + 400 = $2,400.</p><p>The trap is $400, which is only the interest earned, not the total value; $2,433.31 uses compound interest.</p>"
    },
    {
      n: 40,
      prompt: "<p>At what points does the graph of y = x<sup>2</sup> − 4 cross the x-axis?</p>",
      choices: ["(0, −4)", "(4, 0) and (−4, 0)", "(0, 2) and (0, −2)", "(2, 0) and (−2, 0)"],
      answer: 3,
      topic: "Quadratic functions",
      difficulty: "hard",
      explanation: "<p>Set y = 0: x<sup>2</sup> − 4 = 0, so x = ±2, giving the points (2, 0) and (−2, 0).</p><p>The trap is (0, −4), which is the y-intercept, and (0, 2)/(0, −2) place the values on the wrong axis.</p>"
    },
    {
      n: 41,
      prompt: "<p>Two numbers have a sum of 30 and a difference of 8. What is the larger of the two numbers?</p>",
      choices: ["19", "11", "22", "15"],
      answer: 0,
      topic: "Systems of equations",
      difficulty: "hard",
      explanation: "<p>Let x + y = 30 and x − y = 8. Adding gives 2x = 38, so x = 19 (and y = 11).</p><p>The trap is 11, which is the smaller number, not the larger one.</p>"
    },
    {
      n: 42,
      prompt: "<p>Using the quadratic formula, what is the positive solution of 2x<sup>2</sup> − 4x − 3 = 0, to the nearest hundredth?</p>",
      choices: ["1.58", "−0.58", "2.58", "0.58"],
      answer: 2,
      topic: "Quadratic functions",
      difficulty: "hard",
      explanation: "<p>x = (4 ± √(16 + 24))/4 = (4 ± √40)/4; the positive root is (4 + 6.32)/4 ≈ 2.58.</p><p>The trap is −0.58, which is the other (negative) solution, not the positive one requested.</p>"
    },
    {
      n: 43,
      prompt: "<div class='fig'><svg viewBox='0 0 220 180' class='diagram' role='img' aria-label='A guy wire from a point on the ground to the top of a pole, making a 55 degree angle with the ground, anchored 15 feet from the base'><line x1='180' y1='160' x2='180' y2='40' stroke='currentColor' stroke-width='2'/><line x1='30' y1='160' x2='180' y2='160' stroke='currentColor' stroke-width='2'/><line x1='30' y1='160' x2='180' y2='60' stroke='currentColor' stroke-width='2'/><text x='44' y='155' fill='currentColor' font-size='12'>55°</text><text x='92' y='175' fill='currentColor' font-size='12'>15 ft</text></svg></div><p>A guy wire is anchored to the ground 15 feet from the base of a pole and makes a 55° angle with the ground. How long is the wire? (Use cos 55° ≈ 0.574.)</p>",
      choices: ["8.6 ft", "26.1 ft", "18.3 ft", "21.4 ft"],
      answer: 1,
      topic: "Right-triangle trig",
      difficulty: "hard",
      explanation: "<p>The 15 ft distance is adjacent to the 55° angle, so cos 55° = 15/wire, giving wire = 15/0.574 ≈ 26.1 ft.</p><p>The trap is 8.6 ft, which multiplies 15 × 0.574 instead of dividing.</p>"
    },
    {
      n: 44,
      prompt: "<p>If 5<sup>x</sup> = 20, which value is closest to x? (Use log 20 ≈ 1.301 and log 5 ≈ 0.699.)</p>",
      choices: ["4.0", "1.4", "2.6", "1.86"],
      answer: 3,
      topic: "Logarithms",
      difficulty: "hard",
      explanation: "<p>Take logs: x = log 20 / log 5 ≈ 1.301/0.699 ≈ 1.86.</p><p>The trap is 4.0, which divides 20 by 5 as if the equation were linear.</p>"
    },
    {
      n: 45,
      prompt: "<p>A segment has endpoints (2, 1) and (8, 9). Point P is the midpoint of the segment. What is the distance from P to the endpoint (2, 1)?</p>",
      choices: ["5", "10", "6.4", "2.5"],
      answer: 0,
      topic: "Coordinate geometry",
      difficulty: "hard",
      explanation: "<p>The midpoint is (5, 5), and the distance from (5, 5) to (2, 1) is √((5 − 2)<sup>2</sup> + (5 − 1)<sup>2</sup>) = √(9 + 16) = 5.</p><p>The trap is 10, which is the length of the entire segment; P is the midpoint, so the distance is half of that.</p>"
    }
  ] } ]
};
