window.ACT_DATA = window.ACT_DATA || {};

window.ACT_DATA.test1_science = {
  id: "test1_science",
  name: "Science",
  timeMinutes: 40,
  units: [
    {
      title: "Passage I — Data Representation",
      intro: "Soil scientists studied how adding biochar (charred plant material) to sandy loam soil affects the soil's ability to hold water.",
      html: "<p>Researchers mixed biochar into identical samples of sandy loam at five concentrations and measured the percentage of applied water still retained 6 hours and 24 hours after watering (Table 1). In a second test, they fixed biochar at 4% and compared three soil types (Table 2).</p><div class='fig'><div class='fig-title'>Table 1: Water retention by biochar content</div><table class='data-table'><thead><tr><th>Biochar (%)</th><th>Retention at 6 hr (%)</th><th>Retention at 24 hr (%)</th></tr></thead><tbody><tr><td>0</td><td>41</td><td>22</td></tr><tr><td>2</td><td>44</td><td>29</td></tr><tr><td>4</td><td>47</td><td>34</td></tr><tr><td>6</td><td>49</td><td>38</td></tr><tr><td>8</td><td>50</td><td>41</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Retention at 24 hr (%) by soil type at 4% biochar</div><table class='data-table'><thead><tr><th>Soil type</th><th>Retention at 24 hr (%)</th></tr></thead><tbody><tr><td>Sandy loam</td><td>34</td></tr><tr><td>Silt loam</td><td>45</td></tr><tr><td>Clay loam</td><td>58</td></tr></tbody></table></div>",
      questions: [
        {
          n: 1,
          prompt: "According to Table 1, what was the water retention at 24 hr for soil containing 6% biochar?",
          choices: ["38%", "29%", "34%", "41%"],
          answer: 0,
          topic: "Locating data",
          explanation: "<p>In Table 1, the 6% biochar row lists 38 in the 24 hr column.</p><p>The trap 41% is the 8% row, and 34% is the 4% row — both are values from the wrong row.</p>"
        },
        {
          n: 2,
          prompt: "As biochar content increased from 0% to 8%, the water retention at 24 hr:",
          choices: ["decreased only", "increased only", "increased, then decreased", "remained constant"],
          answer: 1,
          topic: "Trends in data",
          explanation: "<p>Reading down the 24 hr column, the values go 22, 29, 34, 38, 41 — a steady rise with no reversal.</p><p>'Increased, then decreased' baits students who misread the closely spaced 6 hr column (49, 50).</p>"
        },
        {
          n: 3,
          prompt: "Based on Table 1, which statement best compares the two retention columns at each biochar level?",
          choices: ["24 hr retention was greater at every level", "The two columns were equal at every level", "6 hr retention was greater at every level", "Neither column was consistently greater"],
          answer: 2,
          topic: "Comparing figures",
          explanation: "<p>At every row the 6 hr value exceeds the 24 hr value (e.g., 41 vs 22, 50 vs 41), because water continues draining over time.</p><p>The '24 hr greater' choice reverses the comparison.</p>"
        },
        {
          n: 4,
          prompt: "According to Table 2, at 4% biochar the highest 24 hr retention occurred in which soil type?",
          choices: ["Sandy loam", "Silt loam", "All three were equal", "Clay loam"],
          answer: 3,
          topic: "Combining data sources",
          explanation: "<p>Table 2 lists clay loam at 58%, higher than silt loam (45%) and sandy loam (34%).</p><p>Sandy loam is the trap because it is the soil used in Table 1, but it holds the least water here.</p>"
        },
        {
          n: 5,
          prompt: "If the trend in Table 1 continued, the 24 hr retention at 10% biochar would most likely be about:",
          choices: ["about 60%", "about 43%", "about 34%", "about 22%"],
          answer: 1,
          topic: "Extrapolation",
          explanation: "<p>The 24 hr gains shrink each step (7, 5, 4, 3), so the next value after 41 rises only slightly, to roughly 43%.</p><p>60% assumes the increases keep their early size instead of tapering.</p>"
        },
        {
          n: 6,
          prompt: "Based on Table 1, the 24 hr retention for soil with 5% biochar would most likely be about:",
          choices: ["about 36%", "about 24%", "about 45%", "about 50%"],
          answer: 0,
          topic: "Interpolation",
          explanation: "<p>5% lies between the 4% row (34%) and the 6% row (38%), so a value near 36% fits.</p><p>45% and 50% are 6 hr-column values, not 24 hr retention.</p>"
        }
      ]
    },
    {
      title: "Passage II — Research Summaries",
      intro: "Students investigated how temperature, catalyst type, and hydrogen peroxide concentration affect how fast hydrogen peroxide (H2O2) breaks down into water and oxygen gas.",
      html: "<p><b>Experiment 1:</b> Using a fixed H2O2 solution, students measured the initial reaction rate (mL O2 per min) at five temperatures with Catalyst A and, separately, with Catalyst B (Figure 1).</p><p><b>Experiment 2:</b> Holding temperature at 30°C and using Catalyst A, students varied the H2O2 concentration and measured the rate (Table 1).</p><p><b>Experiment 3:</b> As a check, students ran the reaction at each temperature with no catalyst added; the rate never exceeded 0.5 mL O2 per min.</p><div class='fig'><div class='fig-title'>Figure 1: Reaction rate vs temperature for two catalysts</div><svg viewBox='0 0 360 240' class='diagram' role='img' aria-label='Line graph of reaction rate in milliliters of oxygen per minute versus temperature for Catalyst A (solid) and Catalyst B (dashed)'><line x1='50' y1='200' x2='340' y2='200' stroke='currentColor' stroke-width='1.5'/><line x1='50' y1='200' x2='50' y2='20' stroke='currentColor' stroke-width='1.5'/><text x='44' y='204' fill='currentColor' font-size='10' text-anchor='end'>0</text><text x='44' y='144' fill='currentColor' font-size='10' text-anchor='end'>20</text><text x='44' y='84' fill='currentColor' font-size='10' text-anchor='end'>40</text><text x='44' y='24' fill='currentColor' font-size='10' text-anchor='end'>60</text><text x='50' y='214' fill='currentColor' font-size='10' text-anchor='middle'>10</text><text x='120' y='214' fill='currentColor' font-size='10' text-anchor='middle'>20</text><text x='190' y='214' fill='currentColor' font-size='10' text-anchor='middle'>30</text><text x='260' y='214' fill='currentColor' font-size='10' text-anchor='middle'>40</text><text x='330' y='214' fill='currentColor' font-size='10' text-anchor='middle'>50</text><polyline points='50,188 120,176 190,155 260,122 330,80' fill='none' stroke='currentColor' stroke-width='2'/><polyline points='50,182 120,164 190,134 260,95 330,44' fill='none' stroke='currentColor' stroke-width='2' stroke-dasharray='5,4'/><text x='300' y='98' fill='currentColor' font-size='10'>A</text><text x='300' y='40' fill='currentColor' font-size='10'>B</text><text x='140' y='232' fill='currentColor' font-size='12'>Temperature (°C)</text></svg></div><div class='fig'><div class='fig-title'>Table 1: Rate vs H2O2 concentration (Catalyst A, 30°C)</div><table class='data-table'><thead><tr><th>H2O2 (M)</th><th>Rate (mL O2/min)</th></tr></thead><tbody><tr><td>0.5</td><td>7</td></tr><tr><td>1.0</td><td>15</td></tr><tr><td>1.5</td><td>23</td></tr><tr><td>2.0</td><td>30</td></tr></tbody></table></div>",
      questions: [
        {
          n: 7,
          prompt: "According to Figure 1, at 30°C which catalyst produced the faster reaction rate?",
          choices: ["Catalyst A", "Both were equal", "Cannot be determined", "Catalyst B"],
          answer: 3,
          topic: "Reading graphs",
          explanation: "<p>At 30°C the dashed Catalyst B curve sits higher (about 22 mL/min) than the solid Catalyst A curve (about 15 mL/min).</p><p>'Cannot be determined' baits students who overlook that the dashed line is labeled B.</p>"
        },
        {
          n: 8,
          prompt: "According to Figure 1, as temperature rose from 10°C to 50°C, the rate for Catalyst A:",
          choices: ["decreased", "remained constant", "increased", "increased, then decreased"],
          answer: 2,
          topic: "Trends in data",
          explanation: "<p>The solid Catalyst A curve climbs from about 4 to about 40 mL/min as temperature rises.</p><p>'Increased, then decreased' is a distractor — neither curve turns downward.</p>"
        },
        {
          n: 9,
          prompt: "In Experiment 2, which was the independent variable that students deliberately changed?",
          choices: ["H2O2 concentration", "Temperature", "Reaction rate", "Type of catalyst"],
          answer: 0,
          topic: "Controls & variables",
          explanation: "<p>Table 1 shows students varied H2O2 concentration while holding temperature (30°C) and catalyst (A) fixed.</p><p>Reaction rate is the dependent variable (the measured result), not the independent one.</p>"
        },
        {
          n: 10,
          prompt: "The main purpose of Experiment 3 was to:",
          choices: ["test a faster third catalyst", "raise the reaction temperature", "provide a no-catalyst baseline for comparison", "measure how much oxygen dissolves"],
          answer: 2,
          topic: "Experimental design",
          explanation: "<p>Running the reaction with no catalyst shows how slow it is on its own, giving a baseline that proves the catalysts caused the higher rates.</p><p>It adds no catalyst, so it cannot be testing a third catalyst.</p>"
        },
        {
          n: 11,
          prompt: "If Experiment 1 were extended to 60°C, the rate for Catalyst B would most likely be:",
          choices: ["about 35 mL/min", "about 70 mL/min", "about 52 mL/min", "about 20 mL/min"],
          answer: 1,
          topic: "Predicting new trials",
          explanation: "<p>Catalyst B rises steeply and reaches about 52 mL/min at 50°C, so at 60°C it should exceed that, roughly 70 mL/min.</p><p>52 mL/min is the 50°C value, not a higher-temperature prediction.</p>"
        },
        {
          n: 12,
          prompt: "In Experiment 1, Catalyst A gave about 15 mL/min at 30°C. Based on Table 1, the fixed H2O2 concentration used in Experiment 1 was closest to:",
          choices: ["about 2.0 M", "about 1.5 M", "about 0.5 M", "about 1.0 M"],
          answer: 3,
          topic: "Combining data sources",
          explanation: "<p>Table 1 shows a rate of 15 mL/min occurs at 1.0 M (same catalyst and temperature), so Experiment 1 most likely used about 1.0 M.</p><p>2.0 M gives 30 mL/min, double the observed rate.</p>"
        },
        {
          n: 13,
          prompt: "According to Table 1, as H2O2 concentration increased, the reaction rate:",
          choices: ["decreased", "was unaffected", "increased roughly in proportion", "peaked at 1.0 M then fell"],
          answer: 2,
          topic: "Trends in data",
          explanation: "<p>Doubling concentration from 0.5 to 1.0 M roughly doubles the rate (7 to 15), and the values keep climbing (23, 30), so rate rises nearly in proportion.</p><p>Nothing in Table 1 shows a peak or a decline.</p>"
        }
      ]
    },
    {
      title: "Passage III — Conflicting Viewpoints",
      intro: "Star K dims irregularly, sometimes by as much as 15%, every few years. Three scientists disagree about what causes the dimming.",
      html: "<p><b>Scientist 1 (Orbiting-object view):</b> Solid bodies — a planet plus fragments — orbit Star K and pass in front of it, blocking its light. Because the bodies follow a fixed orbit, the dimming events should recur at regular, predictable intervals. Solid objects block all wavelengths equally, so the star's color should not change during an event.</p><p><b>Scientist 2 (Dust-disk view):</b> A clumpy cloud of dust and debris orbits the star. The clumps arrive irregularly, so the dimming has no strict period. Tiny dust grains scatter blue light more than red, so the star should look redder while dimming. The dust is warmed by the star, so the system should emit excess infrared radiation.</p><p><b>Scientist 3 (Starspot view):</b> Cool magnetic regions (starspots) on the star's own surface reduce its brightness. No external object is involved. The dimming should track the star's rotation and its long-term magnetic cycle, and because spots are slightly cooler, the star should appear a little redder during dimming.</p>",
      questions: [
        {
          n: 14,
          prompt: "Scientist 1 would most likely predict that the dimming events:",
          choices: ["recur at regular, predictable intervals", "occur completely at random", "always turn the star bluer", "are driven by the star's magnetic cycle"],
          answer: 0,
          topic: "Comparing viewpoints",
          explanation: "<p>Scientist 1 says solid bodies follow a fixed orbit, so eclipses should repeat on a predictable schedule.</p><p>'Driven by the magnetic cycle' is Scientist 3's idea, not Scientist 1's.</p>"
        },
        {
          n: 15,
          prompt: "Which scientist attributes the dimming to something on the star itself rather than an orbiting object?",
          choices: ["Scientist 1", "Scientist 3", "Scientist 2", "Scientists 1 and 2"],
          answer: 1,
          topic: "Comparing viewpoints",
          explanation: "<p>Only Scientist 3 blames starspots on the star's own surface; Scientists 1 and 2 both invoke orbiting material.</p><p>Scientist 2 is the trap because dust is external, not on the star.</p>"
        },
        {
          n: 16,
          prompt: "Astronomers detect that Star K emits far more infrared radiation than expected. This best supports:",
          choices: ["Scientist 1", "Scientist 3", "None of them", "Scientist 2"],
          answer: 3,
          topic: "Evaluating hypotheses",
          explanation: "<p>Scientist 2 predicts warmed dust should glow in the infrared, so excess infrared directly supports the dust-disk view.</p><p>Solid planets (Scientist 1) and starspots (Scientist 3) do not predict a large infrared excess.</p>"
        },
        {
          n: 17,
          prompt: "All three scientists would agree that:",
          choices: ["the dimming is caused by dust", "a planet orbits the star", "the star's color never changes", "the star's measured brightness drops during the events"],
          answer: 3,
          topic: "Comparing viewpoints",
          explanation: "<p>Every view is an explanation for the same observed fact: the star's brightness measurably decreases.</p><p>The other choices are points of disagreement, held by only one scientist each.</p>"
        },
        {
          n: 18,
          prompt: "Long-term monitoring shows the dimming events are NOT strictly periodic but occur irregularly. This evidence most weakens:",
          choices: ["Scientist 1", "Scientist 2", "Scientist 3", "Scientists 2 and 3"],
          answer: 0,
          topic: "Evaluating hypotheses",
          explanation: "<p>Only Scientist 1 requires regular, predictable eclipses from a fixed orbit, so irregular timing undercuts that view.</p><p>Scientist 2 already expects irregular timing, so this evidence does not weaken it.</p>"
        },
        {
          n: 19,
          prompt: "According to Scientist 2, during a dimming event the starlight should appear:",
          choices: ["bluer than normal", "unchanged in color", "redder than normal", "greener than normal"],
          answer: 2,
          topic: "Comparing viewpoints",
          explanation: "<p>Scientist 2 says dust scatters blue light more than red, so the transmitted starlight looks redder.</p><p>'Unchanged in color' is Scientist 1's prediction for solid, opaque bodies.</p>"
        },
        {
          n: 20,
          prompt: "Scientist 3's explanation predicts the dimming should correlate with:",
          choices: ["the orbital period of a planet", "the star's rotation and magnetic cycle", "the amount of dust in a disk", "the mass of an orbiting fragment"],
          answer: 1,
          topic: "Comparing viewpoints",
          explanation: "<p>Starspots move with the star's rotation and grow with its magnetic cycle, so Scientist 3 ties dimming to those.</p><p>Orbital period and fragment mass belong to the orbiting-object view (Scientist 1).</p>"
        },
        {
          n: 21,
          prompt: "A new study detects a solid, planet-sized object crossing Star K on a repeating 3-year orbit. This observation most directly supports:",
          choices: ["Scientist 2", "Scientist 1", "Scientist 3", "None of the scientists"],
          answer: 1,
          topic: "Evaluating hypotheses",
          explanation: "<p>A repeating solid transit matches Scientist 1's orbiting-object view exactly.</p><p>It works against Scientist 3, whose view requires no external object, so Scientist 3 is the trap.</p>"
        }
      ]
    },
    {
      title: "Passage IV — Data Representation",
      intro: "A driving-safety class measured how far a car needs to stop from different speeds on dry pavement.",
      html: "<p>For each initial speed, students recorded the braking distance — how far the car travels once the brakes are applied (Figure 1). They also recorded the reaction distance — how far the car travels during the driver's reaction time before braking begins (Table 1).</p><div class='fig'><div class='fig-title'>Figure 1: Braking distance vs initial speed</div><svg viewBox='0 0 360 240' class='diagram' role='img' aria-label='Bar chart of braking distance in meters for initial speeds of 20, 40, 60, 80, and 100 kilometers per hour'><line x1='50' y1='200' x2='340' y2='200' stroke='currentColor' stroke-width='1.5'/><line x1='50' y1='200' x2='50' y2='20' stroke='currentColor' stroke-width='1.5'/><text x='44' y='204' fill='currentColor' font-size='10' text-anchor='end'>0</text><text x='44' y='114' fill='currentColor' font-size='10' text-anchor='end'>50</text><text x='44' y='24' fill='currentColor' font-size='10' text-anchor='end'>100</text><rect x='60' y='189' width='30' height='11' fill='currentColor'/><rect x='110' y='168' width='30' height='32' fill='currentColor'/><rect x='160' y='132' width='30' height='68' fill='currentColor'/><rect x='210' y='85' width='30' height='115' fill='currentColor'/><rect x='260' y='24' width='30' height='176' fill='currentColor'/><text x='75' y='214' fill='currentColor' font-size='10' text-anchor='middle'>20</text><text x='125' y='214' fill='currentColor' font-size='10' text-anchor='middle'>40</text><text x='175' y='214' fill='currentColor' font-size='10' text-anchor='middle'>60</text><text x='225' y='214' fill='currentColor' font-size='10' text-anchor='middle'>80</text><text x='275' y='214' fill='currentColor' font-size='10' text-anchor='middle'>100</text><text x='140' y='232' fill='currentColor' font-size='12'>Initial speed (km/h)</text></svg></div><div class='fig'><div class='fig-title'>Table 1: Reaction distance vs initial speed</div><table class='data-table'><thead><tr><th>Speed (km/h)</th><th>Reaction distance (m)</th></tr></thead><tbody><tr><td>20</td><td>8</td></tr><tr><td>40</td><td>17</td></tr><tr><td>60</td><td>25</td></tr><tr><td>80</td><td>33</td></tr><tr><td>100</td><td>42</td></tr></tbody></table></div>",
      questions: [
        {
          n: 22,
          prompt: "According to Figure 1, the braking distance from an initial speed of 80 km/h was closest to:",
          choices: ["18 m", "38 m", "98 m", "64 m"],
          answer: 3,
          topic: "Reading graphs",
          explanation: "<p>The 80 km/h bar reaches about 64 m on the vertical scale (just under two-thirds of the way to 100).</p><p>98 m is the 100 km/h bar, one column to the right.</p>"
        },
        {
          n: 23,
          prompt: "According to Figure 1, as initial speed increased, braking distance:",
          choices: ["increased", "decreased", "stayed constant", "increased, then decreased"],
          answer: 0,
          topic: "Trends in data",
          explanation: "<p>Each successive bar is taller: about 6, 18, 38, 64, 98 m.</p><p>No bar is shorter than the one before it, ruling out any decrease.</p>"
        },
        {
          n: 24,
          prompt: "Based on Figure 1, the braking distance from 70 km/h would most likely be about:",
          choices: ["about 20 m", "about 38 m", "about 50 m", "about 64 m"],
          answer: 2,
          topic: "Interpolation",
          explanation: "<p>70 km/h lies between the 60 km/h bar (about 38 m) and the 80 km/h bar (about 64 m), so a value near 50 m fits.</p><p>38 m and 64 m are the neighboring bars themselves, not the midpoint estimate.</p>"
        },
        {
          n: 25,
          prompt: "Combining Figure 1 and Table 1, the total stopping distance (reaction plus braking) from 60 km/h is closest to:",
          choices: ["25 m", "38 m", "50 m", "63 m"],
          answer: 3,
          topic: "Combining data sources",
          explanation: "<p>Reaction distance at 60 km/h is 25 m (Table 1) and braking distance is about 38 m (Figure 1), giving roughly 63 m total.</p><p>38 m alone ignores the reaction distance; 25 m alone ignores braking.</p>"
        },
        {
          n: 26,
          prompt: "When the initial speed doubled from 20 to 40 km/h, the braking distance in Figure 1:",
          choices: ["exactly doubled", "more than doubled", "was cut in half", "did not change"],
          answer: 1,
          topic: "Trends in data",
          explanation: "<p>Braking distance went from about 6 m to about 18 m, roughly tripling, so it more than doubled.</p><p>'Exactly doubled' is the trap for students who assume distance scales directly with speed.</p>"
        },
        {
          n: 27,
          prompt: "If the pattern in Figure 1 continued, the braking distance from 120 km/h would most likely be about:",
          choices: ["about 64 m", "about 98 m", "about 140 m", "about 100 m"],
          answer: 2,
          topic: "Extrapolation",
          explanation: "<p>The bars grow by larger amounts each step (12, 20, 26, 34 m), so beyond the 100 km/h bar (98 m) the next value should jump well past it, near 140 m.</p><p>98 m is the last plotted bar, not an extrapolation.</p>"
        }
      ]
    },
    {
      title: "Passage V — Research Summaries",
      intro: "Biologists tested how light color and light intensity affect the growth of bean seedlings.",
      html: "<p><b>Experiment 1:</b> Identical bean seedlings were grown for 14 days under red, blue, green, or white light of equal intensity; final height was recorded (Table 1).</p><p><b>Experiment 2:</b> Seedlings were grown under white light at four intensities; final height was recorded (Table 2).</p><p><b>Experiment 3:</b> A set of seedlings was grown in complete darkness; after 14 days these plants were pale and only 4 cm tall.</p><div class='fig'><div class='fig-title'>Table 1: Height by light color (equal intensity)</div><table class='data-table'><thead><tr><th>Light color</th><th>Height (cm)</th></tr></thead><tbody><tr><td>Red</td><td>18</td></tr><tr><td>Blue</td><td>22</td></tr><tr><td>Green</td><td>9</td></tr><tr><td>White</td><td>24</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Height by white-light intensity</div><table class='data-table'><thead><tr><th>Intensity (lux)</th><th>Height (cm)</th></tr></thead><tbody><tr><td>500</td><td>10</td></tr><tr><td>1000</td><td>16</td></tr><tr><td>2000</td><td>22</td></tr><tr><td>4000</td><td>25</td></tr></tbody></table></div>",
      questions: [
        {
          n: 28,
          prompt: "In Experiment 1, which was the independent variable?",
          choices: ["Light color", "Plant height", "Air temperature", "Amount of water"],
          answer: 0,
          topic: "Controls & variables",
          explanation: "<p>Experiment 1 changed the color of light while keeping intensity and other conditions equal.</p><p>Plant height is the dependent variable — the measured outcome, not the variable being set.</p>"
        },
        {
          n: 29,
          prompt: "According to Table 1, which light color produced the shortest seedlings?",
          choices: ["Green", "Red", "Blue", "White"],
          answer: 0,
          topic: "Locating data",
          explanation: "<p>Green light gave 9 cm, the smallest height in Table 1.</p><p>Red (18 cm) is a trap for students who confuse it with green.</p>"
        },
        {
          n: 30,
          prompt: "According to Table 2, as white-light intensity increased, seedling height:",
          choices: ["decreased", "stayed constant", "increased", "increased, then decreased"],
          answer: 2,
          topic: "Trends in data",
          explanation: "<p>Height climbs 10, 16, 22, 25 cm as intensity rises from 500 to 4000 lux.</p><p>The gains shrink, but height never falls, so 'increased, then decreased' is wrong.</p>"
        },
        {
          n: 31,
          prompt: "The main purpose of Experiment 3 (darkness) was to:",
          choices: ["test a new shade of green light", "raise the light intensity", "measure the air temperature", "serve as a no-light control"],
          answer: 3,
          topic: "Experimental design",
          explanation: "<p>Growing plants with no light provides a control showing what happens without the factor being tested.</p><p>It uses no light at all, so it cannot be testing a color of light.</p>"
        },
        {
          n: 32,
          prompt: "Based on Table 2, if white-light intensity were raised to 8000 lux, the seedling height would most likely be:",
          choices: ["less than 22 cm", "about 27 cm", "exactly 25 cm", "about 10 cm"],
          answer: 1,
          topic: "Predicting new trials",
          explanation: "<p>Height keeps rising but by smaller steps (6, 6, 3 cm), so beyond 25 cm at 4000 lux it should climb only slightly, to about 27 cm.</p><p>'Exactly 25 cm' assumes growth stops, which the trend does not show.</p>"
        },
        {
          n: 33,
          prompt: "The results of Experiment 1 best support the idea that bean plants use which color of light the least for growth?",
          choices: ["Red", "Blue", "Green", "White"],
          answer: 2,
          topic: "Evaluating hypotheses",
          explanation: "<p>Green light produced far less growth (9 cm) than red or blue, suggesting plants make least use of green light.</p><p>White gave the most growth, so it is the opposite of the answer.</p>"
        },
        {
          n: 34,
          prompt: "Chlorophyll absorbs mostly red and blue light and reflects green light. This fact best explains why, in Experiment 1:",
          choices: ["blue light produced the least growth", "green light produced the least growth", "darkness produced the tallest plants", "white light produced the least growth"],
          answer: 1,
          topic: "Outside knowledge",
          explanation: "<p>Because green light is reflected rather than absorbed, plants capture little energy from it, matching the low 9 cm height under green light.</p><p>Blue light is strongly absorbed, so it did not give the least growth.</p>"
        }
      ]
    },
    {
      title: "Passage VI — Data Representation",
      intro: "A chemistry class measured how temperature affects the solubility of two salts and one gas in water.",
      html: "<p>Table 1 lists the maximum mass of Salt X and Salt Y that dissolves in 100 g of water at each temperature. Table 2 lists the solubility of Gas Z in water at the same temperatures.</p><div class='fig'><div class='fig-title'>Table 1: Salt solubility (g per 100 g water)</div><table class='data-table'><thead><tr><th>Temp (°C)</th><th>Salt X</th><th>Salt Y</th></tr></thead><tbody><tr><td>0</td><td>13</td><td>36</td></tr><tr><td>20</td><td>32</td><td>36</td></tr><tr><td>40</td><td>64</td><td>37</td></tr><tr><td>60</td><td>110</td><td>37</td></tr><tr><td>80</td><td>169</td><td>38</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Gas Z solubility (g per liter)</div><table class='data-table'><thead><tr><th>Temp (°C)</th><th>Solubility (g/L)</th></tr></thead><tbody><tr><td>0</td><td>3.4</td></tr><tr><td>20</td><td>1.7</td></tr><tr><td>40</td><td>1.0</td></tr><tr><td>60</td><td>0.6</td></tr></tbody></table></div>",
      questions: [
        {
          n: 35,
          prompt: "According to Table 1, the solubility of Salt X at 40°C was:",
          choices: ["64 g", "32 g", "110 g", "13 g"],
          answer: 0,
          topic: "Locating data",
          explanation: "<p>The 40°C row lists 64 g in the Salt X column.</p><p>32 g is the 20°C value and 110 g is the 60°C value — both adjacent rows.</p>"
        },
        {
          n: 36,
          prompt: "According to Table 1, as temperature increased, the solubility of Salt X:",
          choices: ["decreased", "stayed constant", "increased, then decreased", "increased"],
          answer: 3,
          topic: "Trends in data",
          explanation: "<p>Salt X rises 13, 32, 64, 110, 169 g with temperature — a steady increase.</p><p>'Stayed constant' actually describes Salt Y, not Salt X.</p>"
        },
        {
          n: 37,
          prompt: "Based on Table 1, which salt's solubility is more strongly affected by temperature?",
          choices: ["Salt Y", "Salt X", "Both equally", "Neither is affected"],
          answer: 1,
          topic: "Comparing figures",
          explanation: "<p>Salt X changes from 13 to 169 g, while Salt Y barely moves (36 to 38 g), so Salt X is far more temperature-dependent.</p><p>Salt Y is the trap because its near-flat values show only a tiny change.</p>"
        },
        {
          n: 38,
          prompt: "According to Table 2, as temperature increased, the solubility of Gas Z:",
          choices: ["increased", "stayed constant", "increased, then decreased", "decreased"],
          answer: 3,
          topic: "Combining data sources",
          explanation: "<p>Gas Z falls from 3.4 to 0.6 g/L as temperature rises — the opposite of Salt X's behavior.</p><p>Students who assume all substances follow the salts' rising trend pick 'increased.'</p>"
        },
        {
          n: 39,
          prompt: "Based on Table 1, the solubility of Salt X at 50°C would most likely be about:",
          choices: ["about 87 g", "about 64 g", "about 110 g", "about 40 g"],
          answer: 0,
          topic: "Interpolation",
          explanation: "<p>50°C lies between the 40°C value (64 g) and the 60°C value (110 g), so about 87 g fits the midpoint.</p><p>64 g and 110 g are the bracketing rows, not the interpolated estimate.</p>"
        },
        {
          n: 40,
          prompt: "If the trend in Table 1 continued, the solubility of Salt X at 100°C would most likely be about:",
          choices: ["about 169 g", "about 200 g", "about 245 g", "about 110 g"],
          answer: 2,
          topic: "Extrapolation",
          explanation: "<p>The increases grow each step (19, 32, 46, 59 g), so beyond 169 g at 80°C the next value should jump by roughly 75 g, to about 245 g.</p><p>169 g is the last measured value, not a prediction for a higher temperature.</p>"
        }
      ]
    }
  ]
};

window.ACT_DATA.test2_science = {
  id: "test2_science",
  name: "Science",
  timeMinutes: 40,
  units: [
    {
      title: "Passage I — Data Representation",
      intro: "An astronomy team catalogued five nearby stars and recorded their basic properties.",
      html: "<p>Table 1 lists each star's surface temperature, luminosity (relative to the Sun, where the Sun = 1), distance from Earth, and observed color.</p><div class='fig'><div class='fig-title'>Table 1: Properties of five stars</div><table class='data-table'><thead><tr><th>Star</th><th>Surface temp (K)</th><th>Luminosity (Sun = 1)</th><th>Distance (ly)</th><th>Color</th></tr></thead><tbody><tr><td>A</td><td>3200</td><td>0.05</td><td>12</td><td>Red</td></tr><tr><td>B</td><td>5800</td><td>1.0</td><td>26</td><td>Yellow</td></tr><tr><td>C</td><td>7500</td><td>5.0</td><td>40</td><td>White</td></tr><tr><td>D</td><td>9800</td><td>25</td><td>65</td><td>White</td></tr><tr><td>E</td><td>22000</td><td>800</td><td>140</td><td>Blue</td></tr></tbody></table></div>",
      questions: [
        {
          n: 1,
          prompt: "According to Table 1, the luminosity of Star C is:",
          choices: ["0.05", "1.0", "25", "5.0"],
          answer: 3,
          topic: "Locating data",
          explanation: "<p>The Star C row lists a luminosity of 5.0 in the luminosity column.</p><p>1.0 is Star B (the Sun-like star) and 25 is Star D — both wrong rows.</p>"
        },
        {
          n: 2,
          prompt: "According to Table 1, as surface temperature increased from Star A to Star E, luminosity:",
          choices: ["increased", "decreased", "stayed constant", "increased, then decreased"],
          answer: 0,
          topic: "Trends in data",
          explanation: "<p>Luminosity climbs 0.05, 1.0, 5.0, 25, 800 as temperature rises from 3200 to 22000 K.</p><p>No value drops, so 'increased, then decreased' is incorrect.</p>"
        },
        {
          n: 3,
          prompt: "According to Table 1, which star is farthest from Earth?",
          choices: ["Star D", "Star E", "Star C", "Star A"],
          answer: 1,
          topic: "Locating data",
          explanation: "<p>Star E lies at 140 light-years, the largest distance in the table.</p><p>Star A is the trap for students who pick the nearest (12 ly) by mistake.</p>"
        },
        {
          n: 4,
          prompt: "According to Table 1, Star E, the hottest star, is observed to be which color?",
          choices: ["Red", "Yellow", "Blue", "White"],
          answer: 2,
          topic: "Combining data sources",
          explanation: "<p>The Star E row pairs 22000 K with the color blue, so the hottest star is blue.</p><p>Red is the trap — it belongs to the coolest star (A, 3200 K).</p>"
        },
        {
          n: 5,
          prompt: "Based on Table 1, a star with a surface temperature of 6500 K would most likely have a luminosity of about:",
          choices: ["about 3", "about 0.05", "about 25", "about 800"],
          answer: 0,
          topic: "Interpolation",
          explanation: "<p>6500 K lies between Star B (5800 K, 1.0) and Star C (7500 K, 5.0), so a luminosity near 3 fits.</p><p>25 and 800 belong to the much hotter Stars D and E.</p>"
        },
        {
          n: 6,
          prompt: "The data in Table 1 indicate that, for these stars, the relationship between surface temperature and luminosity is:",
          choices: ["inverse", "no relationship", "random", "direct (positive)"],
          answer: 3,
          topic: "Trends in data",
          explanation: "<p>Hotter stars are consistently more luminous, so temperature and luminosity rise together — a direct relationship.</p><p>'Inverse' would require luminosity to fall as temperature rises, which it does not.</p>"
        }
      ]
    },
    {
      title: "Passage II — Research Summaries",
      intro: "Students measured the force needed to make a wooden block start sliding across different surfaces.",
      html: "<p><b>Experiment 1:</b> A 2 kg block was pulled across four surfaces, and the force needed to start it sliding was recorded (Table 1).</p><p><b>Experiment 2:</b> On the wood surface, students added mass to the block and measured the sliding force at four masses (Table 2).</p><p><b>Experiment 3:</b> As a check, the block was placed on a nearly frictionless air track; the force needed to move it never exceeded 0.3 N.</p><div class='fig'><div class='fig-title'>Table 1: Force to start sliding (2 kg block)</div><table class='data-table'><thead><tr><th>Surface</th><th>Force (N)</th></tr></thead><tbody><tr><td>Glass</td><td>4</td></tr><tr><td>Wood</td><td>9</td></tr><tr><td>Rubber</td><td>15</td></tr><tr><td>Sandpaper</td><td>21</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Force vs mass (wood surface)</div><table class='data-table'><thead><tr><th>Mass (kg)</th><th>Force (N)</th></tr></thead><tbody><tr><td>1</td><td>4.5</td></tr><tr><td>2</td><td>9</td></tr><tr><td>3</td><td>13.5</td></tr><tr><td>4</td><td>18</td></tr></tbody></table></div>",
      questions: [
        {
          n: 7,
          prompt: "In Experiment 1, which was the independent variable?",
          choices: ["Force needed", "Mass of the block", "Surface type", "Size of the block"],
          answer: 2,
          topic: "Controls & variables",
          explanation: "<p>Experiment 1 changed the surface while keeping the 2 kg block the same, so surface type is the independent variable.</p><p>Force is the dependent variable — the measured result.</p>"
        },
        {
          n: 8,
          prompt: "According to Table 1, which surface required the greatest force to start the block sliding?",
          choices: ["Rubber", "Sandpaper", "Wood", "Glass"],
          answer: 1,
          topic: "Locating data",
          explanation: "<p>Sandpaper needed 21 N, the largest value in Table 1.</p><p>Rubber (15 N) is the trap for students who stop one row short.</p>"
        },
        {
          n: 9,
          prompt: "According to Table 2, as the block's mass increased, the sliding force:",
          choices: ["decreased", "stayed constant", "increased, then decreased", "increased"],
          answer: 3,
          topic: "Trends in data",
          explanation: "<p>Force rises 4.5, 9, 13.5, 18 N as mass goes from 1 to 4 kg.</p><p>Nothing in the table shows a peak or decline, so 'increased, then decreased' is wrong.</p>"
        },
        {
          n: 10,
          prompt: "Based on Table 2, the force needed to slide a 5 kg block on wood would most likely be:",
          choices: ["about 9 N", "about 22.5 N", "about 18 N", "about 40 N"],
          answer: 1,
          topic: "Predicting new trials",
          explanation: "<p>Force increases 4.5 N per kilogram, so 5 kg should need about 22.5 N.</p><p>18 N is the 4 kg value, not the 5 kg prediction.</p>"
        },
        {
          n: 11,
          prompt: "The main purpose of Experiment 3 (the air track) was to:",
          choices: ["provide a near-frictionless baseline", "add more friction to the block", "change the mass of the block", "measure the block's temperature"],
          answer: 0,
          topic: "Experimental design",
          explanation: "<p>The air track removes almost all friction, giving a baseline that shows how small the force is when friction is nearly absent.</p><p>It reduces friction rather than adding it, so the 'add more friction' choice is backwards.</p>"
        },
        {
          n: 12,
          prompt: "The 9 N force measured for the 2 kg block on wood in Experiment 1 matches which row of Table 2?",
          choices: ["1 kg", "4 kg", "2 kg", "3 kg"],
          answer: 2,
          topic: "Combining data sources",
          explanation: "<p>Table 2 lists 9 N at 2 kg on wood, the same surface and mass used in Experiment 1.</p><p>The result is consistent between the two experiments, confirming the 2 kg row.</p>"
        },
        {
          n: 13,
          prompt: "According to Table 2, the relationship between mass and sliding force on wood is best described as:",
          choices: ["force is independent of mass", "force is proportional to mass", "force is inversely related to mass", "force peaks at 2 kg"],
          answer: 1,
          topic: "Trends in data",
          explanation: "<p>Each kilogram adds a fixed 4.5 N, so doubling mass doubles the force — a direct proportion.</p><p>'Force peaks at 2 kg' contradicts the steady rise through 4 kg.</p>"
        }
      ]
    },
    {
      title: "Passage III — Conflicting Viewpoints",
      intro: "A thin worldwide clay layer, the Marlin Boundary, marks the sudden disappearance of many marine species. Two hypotheses explain what caused it.",
      html: "<p><b>Hypothesis 1 (Impact):</b> A single large asteroid struck Earth. The impact hurled dust high into the atmosphere, blocking sunlight for months and cooling the climate rapidly, so most extinctions happened within a few years — a geologically sudden event. This view predicts a thin, worldwide layer rich in iridium (an element abundant in asteroids), grains of shocked quartz that form only under extreme impact pressure, and a large crater the same age as the clay layer.</p><p><b>Hypothesis 2 (Volcanism):</b> Enormous volcanic eruptions poured out lava for tens of thousands of years, releasing carbon dioxide and sulfur gases. The shifting atmosphere first warmed and then cooled the climate, driving a more gradual extinction spread over hundreds of thousands of years. The iridium came from Earth's deep mantle and is spread through many thin layers rather than one. This view predicts thick stacks of basalt lava of matching age.</p>",
      questions: [
        {
          n: 14,
          prompt: "According to Hypothesis 1, the extinction was:",
          choices: ["gradual over millions of years", "caused by rising sea level", "caused by slow volcanism", "geologically sudden"],
          answer: 3,
          topic: "Comparing viewpoints",
          explanation: "<p>Hypothesis 1 says dust blocked sunlight for only months, so most species died within a few years — a sudden event.</p><p>'Gradual over millions of years' describes Hypothesis 2 instead.</p>"
        },
        {
          n: 15,
          prompt: "Which finding would best support Hypothesis 1 over Hypothesis 2?",
          choices: ["thick basalt lava layers", "a slow, stepwise decline in species", "an impact crater of the same age as the clay layer", "steady warming over 100,000 years"],
          answer: 2,
          topic: "Evaluating hypotheses",
          explanation: "<p>A matching-age crater is a direct signature of an asteroid strike, which only Hypothesis 1 predicts.</p><p>Thick basalt layers are evidence for the volcanism view, not the impact view.</p>"
        },
        {
          n: 16,
          prompt: "Both hypotheses agree that:",
          choices: ["an iridium anomaly exists at the boundary", "an asteroid struck Earth", "volcanoes caused the extinction", "the extinction took exactly 5 million years"],
          answer: 0,
          topic: "Comparing viewpoints",
          explanation: "<p>Both views accept the observed iridium anomaly; they disagree only about its source (asteroid vs mantle).</p><p>The asteroid and volcano claims are each held by only one hypothesis.</p>"
        },
        {
          n: 17,
          prompt: "If new dating showed the extinction actually unfolded over about 300,000 years, this would best support:",
          choices: ["Hypothesis 2", "Hypothesis 1", "both equally", "neither"],
          answer: 0,
          topic: "Evaluating hypotheses",
          explanation: "<p>A long, drawn-out extinction matches Hypothesis 2's gradual volcanic timeline.</p><p>Hypothesis 1 requires a rapid die-off within a few years, so this evidence works against it.</p>"
        },
        {
          n: 18,
          prompt: "According to Hypothesis 2, the iridium at the boundary came from:",
          choices: ["an incoming asteroid", "passing comet dust", "Earth's mantle by way of volcanism", "the solar wind"],
          answer: 2,
          topic: "Comparing viewpoints",
          explanation: "<p>Hypothesis 2 states the iridium rose from Earth's deep mantle through volcanic eruptions.</p><p>'An incoming asteroid' is Hypothesis 1's source, not Hypothesis 2's.</p>"
        },
        {
          n: 19,
          prompt: "A worldwide layer of shocked quartz, which forms only under intense impact pressure, is discovered at the boundary. This most directly supports:",
          choices: ["Hypothesis 2", "Hypothesis 1", "neither hypothesis", "both hypotheses equally"],
          answer: 1,
          topic: "Evaluating hypotheses",
          explanation: "<p>Shocked quartz forms only from high-pressure impacts, exactly what Hypothesis 1 predicts.</p><p>Volcanism does not produce shocked quartz, so it does not aid Hypothesis 2.</p>"
        },
        {
          n: 20,
          prompt: "According to Hypothesis 1, immediately after the event the climate first:",
          choices: ["warmed steadily", "stayed the same", "warmed, then cooled", "cooled because sunlight was blocked"],
          answer: 3,
          topic: "Comparing viewpoints",
          explanation: "<p>Hypothesis 1 says atmospheric dust blocked sunlight, cooling the climate rapidly.</p><p>'Warmed, then cooled' is Hypothesis 2's sequence from volcanic gases.</p>"
        },
        {
          n: 21,
          prompt: "Which observation would weaken BOTH hypotheses?",
          choices: ["a global iridium layer at the boundary", "a large crater of matching age", "evidence that the extinct species vanished long before the clay layer formed", "thick basalt flows of matching age"],
          answer: 2,
          topic: "Evaluating hypotheses",
          explanation: "<p>Both views assume the extinction coincides with the clay layer; showing the species died out much earlier would undercut both.</p><p>The other options each support at least one hypothesis rather than weakening both.</p>"
        }
      ]
    },
    {
      title: "Passage IV — Data Representation",
      intro: "A biochemistry lab measured the activity of two digestive enzymes across a range of pH values.",
      html: "<p>Enzyme P and Enzyme Q were each tested at pH 2, 4, 6, 8, and 10. Activity is reported as a percentage of that enzyme's own maximum. Figure 1 shows the results; the dashed curve is Enzyme Q.</p><div class='fig'><div class='fig-title'>Figure 1: Enzyme activity vs pH</div><svg viewBox='0 0 360 240' class='diagram' role='img' aria-label='Line graph of enzyme activity as a percent of maximum versus pH for Enzyme P (solid) and Enzyme Q (dashed)'><line x1='50' y1='200' x2='340' y2='200' stroke='currentColor' stroke-width='1.5'/><line x1='50' y1='200' x2='50' y2='20' stroke='currentColor' stroke-width='1.5'/><text x='44' y='204' fill='currentColor' font-size='10' text-anchor='end'>0</text><text x='44' y='114' fill='currentColor' font-size='10' text-anchor='end'>50</text><text x='44' y='24' fill='currentColor' font-size='10' text-anchor='end'>100</text><text x='50' y='214' fill='currentColor' font-size='10' text-anchor='middle'>2</text><text x='120' y='214' fill='currentColor' font-size='10' text-anchor='middle'>4</text><text x='190' y='214' fill='currentColor' font-size='10' text-anchor='middle'>6</text><text x='260' y='214' fill='currentColor' font-size='10' text-anchor='middle'>8</text><text x='330' y='214' fill='currentColor' font-size='10' text-anchor='middle'>10</text><polyline points='50,182 120,119 190,29 260,74 330,155' fill='none' stroke='currentColor' stroke-width='2'/><polyline points='50,29 120,101 190,155 260,182 330,191' fill='none' stroke='currentColor' stroke-width='2' stroke-dasharray='5,4'/><text x='196' y='24' fill='currentColor' font-size='10'>P</text><text x='66' y='24' fill='currentColor' font-size='10'>Q</text><text x='185' y='232' fill='currentColor' font-size='12'>pH</text></svg></div>",
      questions: [
        {
          n: 22,
          prompt: "According to Figure 1, the activity of Enzyme P peaks at about which pH?",
          choices: ["6", "2", "8", "10"],
          answer: 0,
          topic: "Reading graphs",
          explanation: "<p>The solid Enzyme P curve reaches its highest point (about 95%) at pH 6.</p><p>pH 2 is where the dashed Enzyme Q curve peaks, not Enzyme P.</p>"
        },
        {
          n: 23,
          prompt: "According to Figure 1, the activity of Enzyme Q peaks at about which pH?",
          choices: ["6", "8", "10", "2"],
          answer: 3,
          topic: "Reading graphs",
          explanation: "<p>The dashed Enzyme Q curve is highest (about 95%) at pH 2 and falls off as pH rises.</p><p>pH 6 is Enzyme P's peak, a trap for students who mix up the two curves.</p>"
        },
        {
          n: 24,
          prompt: "According to Figure 1, as pH rose from 2 to 10, the activity of Enzyme Q:",
          choices: ["increased", "decreased", "stayed constant", "increased, then decreased"],
          answer: 1,
          topic: "Trends in data",
          explanation: "<p>Enzyme Q falls steadily from about 95% at pH 2 to about 5% at pH 10.</p><p>'Increased, then decreased' describes Enzyme P's single peak, not Enzyme Q.</p>"
        },
        {
          n: 25,
          prompt: "According to Figure 1, at pH 4 which enzyme was more active?",
          choices: ["Enzyme Q", "Enzyme P", "Both were equal", "Neither was active"],
          answer: 0,
          topic: "Comparing figures",
          explanation: "<p>At pH 4 the dashed Enzyme Q curve (about 55%) is above the solid Enzyme P curve (about 45%).</p><p>They are close, which tempts the 'both equal' choice, but Q is clearly higher.</p>"
        },
        {
          n: 26,
          prompt: "Based on Figure 1, the activity of Enzyme P at pH 7 would most likely be about:",
          choices: ["about 95%", "about 70%", "about 85%", "about 45%"],
          answer: 2,
          topic: "Interpolation",
          explanation: "<p>pH 7 lies between Enzyme P's values at pH 6 (about 95%) and pH 8 (about 70%), so roughly 85% fits.</p><p>95% and 70% are the bracketing points themselves, not the midpoint estimate.</p>"
        },
        {
          n: 27,
          prompt: "An enzyme working in the highly acidic environment of the stomach (about pH 2) would most likely be:",
          choices: ["Enzyme P", "both equally", "neither enzyme", "Enzyme Q"],
          answer: 3,
          topic: "Predicting new trials",
          explanation: "<p>Enzyme Q is most active at pH 2, so it is best suited to a strongly acidic environment.</p><p>Enzyme P is nearly inactive at pH 2, so it is the trap.</p>"
        }
      ]
    },
    {
      title: "Passage V — Research Summaries",
      intro: "Students measured how well different substances dissolved in water conduct an electric current.",
      html: "<p><b>Experiment 1:</b> Equal numbers of moles of five substances were each dissolved in water, and the conductivity of the solution was measured in arbitrary units (Table 1).</p><p><b>Experiment 2:</b> Students dissolved sodium chloride (NaCl) at four concentrations and measured conductivity (Table 2).</p><p><b>Experiment 3:</b> As a check, students measured the conductivity of pure distilled water with nothing added; it read about 0.5 units.</p><div class='fig'><div class='fig-title'>Table 1: Conductivity of solutions (equal moles)</div><table class='data-table'><thead><tr><th>Substance</th><th>Conductivity (units)</th></tr></thead><tbody><tr><td>Sugar</td><td>2</td></tr><tr><td>Ethanol</td><td>1</td></tr><tr><td>NaCl</td><td>95</td></tr><tr><td>HCl</td><td>110</td></tr><tr><td>CaCl2</td><td>140</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Conductivity vs NaCl concentration</div><table class='data-table'><thead><tr><th>NaCl (M)</th><th>Conductivity (units)</th></tr></thead><tbody><tr><td>0.1</td><td>20</td></tr><tr><td>0.2</td><td>39</td></tr><tr><td>0.4</td><td>77</td></tr><tr><td>0.8</td><td>150</td></tr></tbody></table></div>",
      questions: [
        {
          n: 28,
          prompt: "In Experiment 2, which was the independent variable?",
          choices: ["Conductivity of the solution", "NaCl concentration", "Temperature of the water", "Volume of water used"],
          answer: 1,
          topic: "Controls & variables",
          explanation: "<p>Experiment 2 varied NaCl concentration and measured the resulting conductivity.</p><p>Conductivity is the dependent variable — the outcome that was measured.</p>"
        },
        {
          n: 29,
          prompt: "According to Table 1, which substance conducted electricity the least?",
          choices: ["Sugar", "Ethanol", "NaCl", "HCl"],
          answer: 1,
          topic: "Locating data",
          explanation: "<p>Ethanol read 1 unit, the lowest value in Table 1 (just below sugar at 2).</p><p>Sugar is the trap because it is also very low, but ethanol is lower still.</p>"
        },
        {
          n: 30,
          prompt: "According to Table 2, as NaCl concentration increased, conductivity:",
          choices: ["decreased", "stayed constant", "increased, then decreased", "increased"],
          answer: 3,
          topic: "Trends in data",
          explanation: "<p>Conductivity climbs 20, 39, 77, 150 units as concentration rises from 0.1 to 0.8 M.</p><p>No value falls, so 'increased, then decreased' is wrong.</p>"
        },
        {
          n: 31,
          prompt: "The main purpose of Experiment 3 (distilled water) was to:",
          choices: ["provide a baseline for water with no solute", "raise the solution's conductivity", "test how sugar dissolves", "increase the water temperature"],
          answer: 0,
          topic: "Experimental design",
          explanation: "<p>Measuring pure water shows that water alone barely conducts, giving a baseline that proves the dissolved substances caused the higher readings.</p><p>It adds no solute, so it cannot be testing sugar.</p>"
        },
        {
          n: 32,
          prompt: "The substances in Table 1 that conducted well (NaCl, HCl, CaCl2) most likely did so because they:",
          choices: ["evaporated quickly", "stayed as whole molecules", "released ions into the solution", "were brightly colored"],
          answer: 2,
          topic: "Outside knowledge",
          explanation: "<p>Salts and strong acids split into charged ions in water, and moving ions carry current.</p><p>Sugar and ethanol stay as neutral molecules, which is why they barely conducted.</p>"
        },
        {
          n: 33,
          prompt: "Based on Table 2, the conductivity of a 0.6 M NaCl solution would most likely be about:",
          choices: ["about 115 units", "about 39 units", "about 200 units", "about 20 units"],
          answer: 0,
          topic: "Interpolation",
          explanation: "<p>0.6 M lies between 0.4 M (77 units) and 0.8 M (150 units), so a value near 115 fits.</p><p>200 units is above the highest measured point and overshoots the range.</p>"
        },
        {
          n: 34,
          prompt: "According to Table 1, which substance produced the highest conductivity at equal moles?",
          choices: ["NaCl", "HCl", "CaCl2", "Sugar"],
          answer: 2,
          topic: "Comparing figures",
          explanation: "<p>CaCl2 read 140 units, the highest in Table 1, because each unit releases more ions than NaCl or HCl.</p><p>HCl (110) and NaCl (95) are lower, so they are traps.</p>"
        }
      ]
    },
    {
      title: "Passage VI — Data Representation",
      intro: "Oceanographers measured dissolved oxygen and water temperature at several depths at one ocean station.",
      html: "<p>Figure 1 shows the dissolved oxygen concentration at five depths, and Table 1 lists the water temperature at the same depths.</p><div class='fig'><div class='fig-title'>Figure 1: Dissolved oxygen vs depth</div><svg viewBox='0 0 360 240' class='diagram' role='img' aria-label='Bar chart of dissolved oxygen in milligrams per liter at depths of 0, 50, 100, 200, and 500 meters'><line x1='50' y1='200' x2='340' y2='200' stroke='currentColor' stroke-width='1.5'/><line x1='50' y1='200' x2='50' y2='20' stroke='currentColor' stroke-width='1.5'/><text x='44' y='204' fill='currentColor' font-size='10' text-anchor='end'>0</text><text x='44' y='124' fill='currentColor' font-size='10' text-anchor='end'>4</text><text x='44' y='44' fill='currentColor' font-size='10' text-anchor='end'>8</text><rect x='60' y='30' width='30' height='170' fill='currentColor'/><rect x='110' y='60' width='30' height='140' fill='currentColor'/><rect x='160' y='110' width='30' height='90' fill='currentColor'/><rect x='210' y='140' width='30' height='60' fill='currentColor'/><rect x='260' y='150' width='30' height='50' fill='currentColor'/><text x='75' y='214' fill='currentColor' font-size='10' text-anchor='middle'>0</text><text x='125' y='214' fill='currentColor' font-size='10' text-anchor='middle'>50</text><text x='175' y='214' fill='currentColor' font-size='10' text-anchor='middle'>100</text><text x='225' y='214' fill='currentColor' font-size='10' text-anchor='middle'>200</text><text x='275' y='214' fill='currentColor' font-size='10' text-anchor='middle'>500</text><text x='150' y='232' fill='currentColor' font-size='12'>Depth (m)</text></svg></div><div class='fig'><div class='fig-title'>Table 1: Water temperature vs depth</div><table class='data-table'><thead><tr><th>Depth (m)</th><th>Temperature (°C)</th></tr></thead><tbody><tr><td>0</td><td>22</td></tr><tr><td>50</td><td>18</td></tr><tr><td>100</td><td>12</td></tr><tr><td>200</td><td>8</td></tr><tr><td>500</td><td>5</td></tr></tbody></table></div>",
      questions: [
        {
          n: 35,
          prompt: "According to Figure 1, the dissolved oxygen at a depth of 100 m was closest to:",
          choices: ["8.5 mg/L", "7.0 mg/L", "2.5 mg/L", "4.5 mg/L"],
          answer: 3,
          topic: "Reading graphs",
          explanation: "<p>The 100 m bar reaches about 4.5 mg/L, a little above the '4' gridline.</p><p>8.5 mg/L is the surface (0 m) bar, the tallest one.</p>"
        },
        {
          n: 36,
          prompt: "According to Figure 1, as depth increased, dissolved oxygen:",
          choices: ["increased", "decreased", "stayed constant", "increased, then decreased"],
          answer: 1,
          topic: "Trends in data",
          explanation: "<p>Each deeper bar is shorter — about 8.5, 7.0, 4.5, 3.0, 2.5 mg/L — a steady decline.</p><p>No bar is taller than the one above it, ruling out any increase.</p>"
        },
        {
          n: 37,
          prompt: "Combining Figure 1 and Table 1, as depth increased, both temperature and dissolved oxygen:",
          choices: ["increased", "stayed constant", "decreased", "moved in opposite directions"],
          answer: 2,
          topic: "Combining data sources",
          explanation: "<p>Temperature drops 22 to 5°C (Table 1) while oxygen drops 8.5 to 2.5 mg/L (Figure 1), so both fall with depth.</p><p>'Moved in opposite directions' is the trap for students who assume the two must trade off.</p>"
        },
        {
          n: 38,
          prompt: "According to Table 1, the water temperature at 200 m was:",
          choices: ["8°C", "12°C", "22°C", "5°C"],
          answer: 0,
          topic: "Locating data",
          explanation: "<p>The 200 m row lists 8°C in the temperature column.</p><p>12°C is the 100 m value and 5°C is the 500 m value — both adjacent rows.</p>"
        },
        {
          n: 39,
          prompt: "Based on Figure 1, the dissolved oxygen at a depth of 150 m would most likely be about:",
          choices: ["about 4.5 mg/L", "about 3.7 mg/L", "about 2.5 mg/L", "about 7.0 mg/L"],
          answer: 1,
          topic: "Interpolation",
          explanation: "<p>150 m lies between the 100 m bar (about 4.5 mg/L) and the 200 m bar (about 3.0 mg/L), so roughly 3.7 mg/L fits.</p><p>4.5 and 3.0 are the bracketing bars themselves, not the midpoint estimate.</p>"
        },
        {
          n: 40,
          prompt: "If the trend in Table 1 continued, the water temperature at 1000 m would most likely be about:",
          choices: ["about 8°C", "about 12°C", "about 22°C", "about 4°C"],
          answer: 3,
          topic: "Extrapolation",
          explanation: "<p>Temperature keeps falling with depth and is already 5°C at 500 m, so at 1000 m it should be a bit lower, near 4°C.</p><p>8°C is the 200 m value, shallower than 500 m, so temperature cannot rise back to it.</p>"
        }
      ]
    }
  ]
};

window.ACT_DATA.test3_science = {
  id: "test3_science",
  name: "Science",
  timeMinutes: 40,
  units: [
    {
      title: "Passage I — Data Representation",
      intro: "Exercise physiologists measured how the body responds to increasing exercise intensity on a stationary bike.",
      html: "<p>A volunteer pedaled at five workloads. At each workload, researchers recorded heart rate and oxygen consumption (Table 1). After the hardest workload, they recorded how the heart rate recovered over time (Table 2).</p><div class='fig'><div class='fig-title'>Table 1: Heart rate and oxygen use by workload</div><table class='data-table'><thead><tr><th>Workload (W)</th><th>Heart rate (bpm)</th><th>O2 use (mL/kg/min)</th></tr></thead><tbody><tr><td>0</td><td>68</td><td>4</td></tr><tr><td>50</td><td>95</td><td>14</td></tr><tr><td>100</td><td>120</td><td>24</td></tr><tr><td>150</td><td>150</td><td>34</td></tr><tr><td>200</td><td>178</td><td>44</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Heart rate recovery after 200 W</div><table class='data-table'><thead><tr><th>Time after stopping (min)</th><th>Heart rate (bpm)</th></tr></thead><tbody><tr><td>0</td><td>178</td></tr><tr><td>2</td><td>130</td></tr><tr><td>4</td><td>100</td></tr><tr><td>6</td><td>80</td></tr></tbody></table></div>",
      questions: [
        {
          n: 1,
          prompt: "According to Table 1, the heart rate at a workload of 100 W was:",
          choices: ["95 bpm", "68 bpm", "120 bpm", "150 bpm"],
          answer: 2,
          topic: "Locating data",
          explanation: "<p>The 100 W row lists 120 bpm in the heart rate column.</p><p>150 bpm is the 150 W row, one line lower.</p>"
        },
        {
          n: 2,
          prompt: "According to Table 1, as workload increased, oxygen consumption:",
          choices: ["decreased only", "remained constant", "increased, then decreased", "increased only"],
          answer: 3,
          topic: "Trends in data",
          explanation: "<p>Oxygen use rises 4, 14, 24, 34, 44 mL/kg/min with no reversal.</p><p>'Increased, then decreased' is a distractor — none of the values fall.</p>"
        },
        {
          n: 3,
          prompt: "Based on Table 1, as workload rose, heart rate and oxygen consumption both:",
          choices: ["increased", "decreased", "stayed constant", "changed in opposite directions"],
          answer: 0,
          topic: "Comparing figures",
          explanation: "<p>Both columns climb together as workload increases (heart rate 68 to 178, oxygen 4 to 44).</p><p>'Changed in opposite directions' would require one to fall while the other rose, which does not happen.</p>"
        },
        {
          n: 4,
          prompt: "According to Table 2, 4 minutes after stopping the 200 W exercise, the heart rate was:",
          choices: ["178 bpm", "100 bpm", "130 bpm", "80 bpm"],
          answer: 1,
          topic: "Combining data sources",
          explanation: "<p>The 4 min row of Table 2 lists 100 bpm.</p><p>178 bpm is the value at the instant exercise stopped (0 min), not after 4 minutes.</p>"
        },
        {
          n: 5,
          prompt: "Based on Table 1, the oxygen consumption at a workload of 75 W would most likely be about:",
          choices: ["about 4 mL/kg/min", "about 34 mL/kg/min", "about 44 mL/kg/min", "about 19 mL/kg/min"],
          answer: 3,
          topic: "Interpolation",
          explanation: "<p>75 W lies between 50 W (14) and 100 W (24), so a value near 19 mL/kg/min fits.</p><p>34 and 44 belong to the much higher 150 W and 200 W workloads.</p>"
        },
        {
          n: 6,
          prompt: "If the trend in Table 1 continued, the heart rate at a workload of 250 W would most likely be about:",
          choices: ["about 178 bpm", "about 150 bpm", "about 205 bpm", "about 120 bpm"],
          answer: 2,
          topic: "Extrapolation",
          explanation: "<p>Heart rate rises by roughly 28 bpm per 50 W step, so beyond 178 bpm at 200 W the next value should be near 205 bpm.</p><p>178 bpm is the last measured value, not an extrapolation to a higher workload.</p>"
        }
      ]
    },
    {
      title: "Passage II — Research Summaries",
      intro: "Students studied how a fixed sample of gas behaves when its volume and temperature change.",
      html: "<p><b>Experiment 1:</b> Holding temperature at 25°C, students changed the gas volume and measured its pressure (Table 1).</p><p><b>Experiment 2:</b> Holding volume at 2 L, students changed the gas temperature and measured its pressure (Figure 1).</p><p><b>Experiment 3:</b> Students repeated Experiment 1 using a different gas, helium, and recorded the same pressures at each volume.</p><div class='fig'><div class='fig-title'>Table 1: Pressure vs volume (25°C)</div><table class='data-table'><thead><tr><th>Volume (L)</th><th>Pressure (kPa)</th></tr></thead><tbody><tr><td>1</td><td>240</td></tr><tr><td>2</td><td>120</td></tr><tr><td>3</td><td>80</td></tr><tr><td>4</td><td>60</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Figure 1: Pressure vs temperature (volume held at 2 L)</div><svg viewBox='0 0 360 240' class='diagram' role='img' aria-label='Line graph of gas pressure in kilopascals versus temperature in degrees Celsius at constant volume'><line x1='50' y1='200' x2='340' y2='200' stroke='currentColor' stroke-width='1.5'/><line x1='50' y1='200' x2='50' y2='20' stroke='currentColor' stroke-width='1.5'/><text x='44' y='204' fill='currentColor' font-size='10' text-anchor='end'>0</text><text x='44' y='114' fill='currentColor' font-size='10' text-anchor='end'>70</text><text x='44' y='24' fill='currentColor' font-size='10' text-anchor='end'>140</text><text x='50' y='214' fill='currentColor' font-size='10' text-anchor='middle'>0</text><text x='120' y='214' fill='currentColor' font-size='10' text-anchor='middle'>25</text><text x='190' y='214' fill='currentColor' font-size='10' text-anchor='middle'>50</text><text x='260' y='214' fill='currentColor' font-size='10' text-anchor='middle'>75</text><text x='330' y='214' fill='currentColor' font-size='10' text-anchor='middle'>100</text><polyline points='50,71 120,60 190,48 260,37 330,25' fill='none' stroke='currentColor' stroke-width='2'/><text x='140' y='232' fill='currentColor' font-size='12'>Temperature (°C)</text></svg></div>",
      questions: [
        {
          n: 7,
          prompt: "According to Table 1, as the gas volume increased, its pressure:",
          choices: ["increased", "decreased", "stayed constant", "increased, then decreased"],
          answer: 1,
          topic: "Trends in data",
          explanation: "<p>Pressure falls 240, 120, 80, 60 kPa as volume rises from 1 to 4 L.</p><p>The pressure never rises, so 'increased' is wrong.</p>"
        },
        {
          n: 8,
          prompt: "According to Table 1, the pressure of the gas at a volume of 2 L was:",
          choices: ["120 kPa", "240 kPa", "80 kPa", "60 kPa"],
          answer: 0,
          topic: "Locating data",
          explanation: "<p>The 2 L row lists 120 kPa.</p><p>240 kPa is the 1 L value, a trap for students who read the wrong row.</p>"
        },
        {
          n: 9,
          prompt: "In Experiment 2, which was the independent variable?",
          choices: ["Pressure", "Volume", "Temperature", "Type of gas"],
          answer: 2,
          topic: "Controls & variables",
          explanation: "<p>Experiment 2 changed the temperature while holding volume at 2 L, so temperature is the independent variable.</p><p>Pressure is the dependent variable — the measured outcome.</p>"
        },
        {
          n: 10,
          prompt: "According to Figure 1, as temperature increased at constant volume, the pressure:",
          choices: ["decreased", "stayed constant", "increased, then decreased", "increased"],
          answer: 3,
          topic: "Reading graphs",
          explanation: "<p>The line in Figure 1 rises steadily from about 100 kPa at 0°C to about 136 kPa at 100°C.</p><p>The line never turns down, so 'increased, then decreased' is incorrect.</p>"
        },
        {
          n: 11,
          prompt: "The main purpose of Experiment 3 (repeating with helium) was to:",
          choices: ["raise the temperature of the gas", "test whether the result depends on which gas is used", "remove all gas from the container", "measure only the volume"],
          answer: 1,
          topic: "Experimental design",
          explanation: "<p>Repeating with a different gas checks whether the pressure-volume pattern is the same regardless of gas identity.</p><p>It does not change temperature, so raising the temperature is not its purpose.</p>"
        },
        {
          n: 12,
          prompt: "The data in Table 1 show that the relationship between volume and pressure is best described as:",
          choices: ["inverse (their product stays about constant)", "direct", "no relationship", "exponential growth"],
          answer: 0,
          topic: "Trends in data",
          explanation: "<p>When volume doubles from 1 to 2 L, pressure halves from 240 to 120 kPa, and the product stays near 240, indicating an inverse relationship.</p><p>A direct relationship would have pressure rise as volume rises, the opposite of the data.</p>"
        },
        {
          n: 13,
          prompt: "Based on Table 1, if the volume were increased to 6 L at 25°C, the pressure would most likely be about:",
          choices: ["120 kPa", "80 kPa", "60 kPa", "40 kPa"],
          answer: 3,
          topic: "Predicting new trials",
          explanation: "<p>The product of pressure and volume stays near 240, so at 6 L the pressure should be about 240 divided by 6, or 40 kPa.</p><p>60 kPa is the 4 L value and is too high for 6 L.</p>"
        }
      ]
    },
    {
      title: "Passage III — Conflicting Viewpoints",
      intro: "A valley floor is strewn with hundreds of large granite boulders resting on softer sedimentary bedrock. The nearest granite mountains lie 40 km to the north. Three geologists propose different origins.",
      html: "<p><b>Hypothesis 1 (Glacier):</b> During an ice age, a glacier flowed south from the granite mountains, carried the boulders frozen in the ice, and dropped them as it melted. This view predicts scratches (striations) gouged into the bedrock beneath the boulders and a layer of unsorted sediment (till) that mixes clay through boulder-sized pieces together.</p><p><b>Hypothesis 2 (Flood):</b> A catastrophic ancient flood swept the boulders down the valley in rushing water. This view predicts boulders rounded and smoothed by tumbling, deposits sorted by size with the largest boulders left farthest upstream, and layers of sand and gravel between the boulders.</p><p><b>Hypothesis 3 (Local origin):</b> A granite layer once capped the whole valley. The softer rock around the granite eroded away, leaving the boulders where they had formed. This view predicts no transport marks, no striations or water-rounding, and boulders that match a former local granite cap rather than the distant mountains.</p>",
      questions: [
        {
          n: 14,
          prompt: "According to Hypothesis 1, the bedrock directly beneath the boulders should show:",
          choices: ["rounded layers of gravel", "a chemical match to the boulders", "scratches (striations)", "no sediment at all"],
          answer: 2,
          topic: "Comparing viewpoints",
          explanation: "<p>Hypothesis 1 says moving ice gouges striations into the bedrock, so scratches are its key prediction.</p><p>Rounded gravel layers are what Hypothesis 2 (flood) predicts, not Hypothesis 1.</p>"
        },
        {
          n: 15,
          prompt: "According to Hypothesis 2, the boulders themselves should be:",
          choices: ["rounded and smoothed by tumbling in water", "scratched by ice", "chemically identical to the local bedrock", "unsorted with no size pattern"],
          answer: 0,
          topic: "Comparing viewpoints",
          explanation: "<p>Hypothesis 2 says tumbling in a flood rounds and smooths the boulders.</p><p>'Unsorted with no size pattern' is actually a glacier prediction (Hypothesis 1), the opposite of the flood's size sorting.</p>"
        },
        {
          n: 16,
          prompt: "Which hypothesis claims the boulders were NOT carried in from somewhere else?",
          choices: ["Hypothesis 1", "Hypothesis 3", "Hypothesis 2", "Hypotheses 1 and 2"],
          answer: 1,
          topic: "Comparing viewpoints",
          explanation: "<p>Only Hypothesis 3 says the boulders formed in place from a local granite cap, with no transport.</p><p>Hypotheses 1 and 2 both invoke long-distance transport, by ice or by water.</p>"
        },
        {
          n: 17,
          prompt: "Geologists find the boulders are clearly sorted by size, with the largest ones at the upstream end of the valley. This best supports:",
          choices: ["Hypothesis 1", "Hypothesis 2", "Hypothesis 3", "none of them"],
          answer: 1,
          topic: "Evaluating hypotheses",
          explanation: "<p>Size sorting with the largest boulders upstream is exactly what Hypothesis 2 (flood) predicts.</p><p>Hypothesis 1 predicts unsorted deposits, so this evidence does not favor it.</p>"
        },
        {
          n: 18,
          prompt: "A layer of unsorted till — clay through boulder-sized pieces mixed together — is found under the field. This best supports:",
          choices: ["Hypothesis 3", "Hypothesis 2", "none of them", "Hypothesis 1"],
          answer: 3,
          topic: "Evaluating hypotheses",
          explanation: "<p>Unsorted till mixing all sizes together is the signature deposit predicted by Hypothesis 1 (glacier).</p><p>Hypothesis 2 predicts sorted, layered sand and gravel, not unsorted till.</p>"
        },
        {
          n: 19,
          prompt: "All three hypotheses agree that:",
          choices: ["the boulders are made of granite", "a glacier crossed the valley", "a flood occurred", "the boulders formed where they now rest"],
          answer: 0,
          topic: "Comparing viewpoints",
          explanation: "<p>Every hypothesis begins from the shared observation that the boulders are granite resting on sedimentary bedrock.</p><p>The glacier, flood, and in-place-formation claims are each held by only one hypothesis.</p>"
        },
        {
          n: 20,
          prompt: "Tests show the boulders are chemically identical to the granite mountains 40 km north and unlike the local bedrock. This most weakens:",
          choices: ["Hypothesis 1", "Hypothesis 2", "Hypothesis 3", "none of them"],
          answer: 2,
          topic: "Evaluating hypotheses",
          explanation: "<p>Hypothesis 3 requires the boulders to match a local granite cap; a match to distant mountains instead undercuts it and points to transport.</p><p>The same evidence actually supports Hypotheses 1 and 2, which rely on transport from the north.</p>"
        },
        {
          n: 21,
          prompt: "Researchers find no striations and no water-rounding, and the boulders match a granite layer that once capped the valley. This best supports:",
          choices: ["Hypothesis 1", "Hypothesis 2", "none of them", "Hypothesis 3"],
          answer: 3,
          topic: "Evaluating hypotheses",
          explanation: "<p>Absence of ice scratches and water-rounding, plus a match to a former local cap, is exactly what Hypothesis 3 predicts.</p><p>The missing striations argue against Hypothesis 1 and the missing rounding argues against Hypothesis 2.</p>"
        }
      ]
    },
    {
      title: "Passage IV — Data Representation",
      intro: "Students investigated what determines the period of a swinging pendulum (the time for one complete back-and-forth swing).",
      html: "<p>In one test, students changed the pendulum's length and timed its period (Table 1 and Figure 1). In a second test, they held the length at 1.0 m and changed the mass of the bob (Table 2).</p><div class='fig'><div class='fig-title'>Table 1: Period vs length</div><table class='data-table'><thead><tr><th>Length (m)</th><th>Period (s)</th></tr></thead><tbody><tr><td>0.25</td><td>1.0</td></tr><tr><td>0.5</td><td>1.4</td></tr><tr><td>1.0</td><td>2.0</td></tr><tr><td>1.5</td><td>2.45</td></tr><tr><td>2.0</td><td>2.8</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Figure 1: Pendulum period vs length</div><svg viewBox='0 0 360 240' class='diagram' role='img' aria-label='Line graph of pendulum period in seconds versus length in meters, rising with a decreasing slope'><line x1='50' y1='200' x2='340' y2='200' stroke='currentColor' stroke-width='1.5'/><line x1='50' y1='200' x2='50' y2='20' stroke='currentColor' stroke-width='1.5'/><text x='44' y='204' fill='currentColor' font-size='10' text-anchor='end'>0</text><text x='44' y='144' fill='currentColor' font-size='10' text-anchor='end'>1</text><text x='44' y='84' fill='currentColor' font-size='10' text-anchor='end'>2</text><text x='44' y='24' fill='currentColor' font-size='10' text-anchor='end'>3</text><text x='120' y='214' fill='currentColor' font-size='10' text-anchor='middle'>0.5</text><text x='190' y='214' fill='currentColor' font-size='10' text-anchor='middle'>1.0</text><text x='260' y='214' fill='currentColor' font-size='10' text-anchor='middle'>1.5</text><text x='330' y='214' fill='currentColor' font-size='10' text-anchor='middle'>2.0</text><polyline points='85,140 120,116 190,80 260,53 330,32' fill='none' stroke='currentColor' stroke-width='2'/><text x='150' y='232' fill='currentColor' font-size='12'>Length (m)</text></svg></div><div class='fig'><div class='fig-title'>Table 2: Period vs bob mass (length 1.0 m)</div><table class='data-table'><thead><tr><th>Mass (kg)</th><th>Period (s)</th></tr></thead><tbody><tr><td>0.1</td><td>2.0</td></tr><tr><td>0.2</td><td>2.0</td></tr><tr><td>0.5</td><td>2.0</td></tr></tbody></table></div>",
      questions: [
        {
          n: 22,
          prompt: "According to Table 1, the period of the pendulum at a length of 1.0 m was:",
          choices: ["1.4 s", "2.0 s", "2.8 s", "1.0 s"],
          answer: 1,
          topic: "Locating data",
          explanation: "<p>The 1.0 m row of Table 1 lists a period of 2.0 s.</p><p>2.8 s is the value at 2.0 m, one row down.</p>"
        },
        {
          n: 23,
          prompt: "According to Table 1 and Figure 1, as the pendulum's length increased, its period:",
          choices: ["decreased", "stayed constant", "increased", "increased, then decreased"],
          answer: 2,
          topic: "Trends in data",
          explanation: "<p>Period rises 1.0, 1.4, 2.0, 2.45, 2.8 s as length grows, and the curve in Figure 1 climbs throughout.</p><p>The curve never turns down, so 'increased, then decreased' is wrong.</p>"
        },
        {
          n: 24,
          prompt: "According to Table 2, changing the mass of the bob had what effect on the period?",
          choices: ["no effect; the period stayed 2.0 s", "the period increased", "the period decreased", "the period doubled"],
          answer: 0,
          topic: "Controls & variables",
          explanation: "<p>Every mass in Table 2 gives a period of 2.0 s, so mass had no effect.</p><p>The 'period increased' choice ignores that all three values are identical.</p>"
        },
        {
          n: 25,
          prompt: "Based on Table 1, the period at a length of 0.75 m would most likely be about:",
          choices: ["about 1.0 s", "about 1.7 s", "about 2.4 s", "about 2.8 s"],
          answer: 1,
          topic: "Interpolation",
          explanation: "<p>0.75 m lies between 0.5 m (1.4 s) and 1.0 m (2.0 s), so a period near 1.7 s fits.</p><p>2.4 s corresponds to 1.5 m, well beyond the target length.</p>"
        },
        {
          n: 26,
          prompt: "In Table 1, when the length doubled from 0.5 m to 1.0 m, the period:",
          choices: ["exactly doubled", "more than doubled", "was cut in half", "increased but less than doubled"],
          answer: 3,
          topic: "Trends in data",
          explanation: "<p>The period went from 1.4 s to 2.0 s, a factor of about 1.4, so it rose but by less than double.</p><p>'Exactly doubled' is the trap for students who assume period scales directly with length.</p>"
        },
        {
          n: 27,
          prompt: "On the Moon, where gravity is weaker than on Earth, a pendulum of the same length would have a period that is:",
          choices: ["longer", "shorter", "the same", "zero"],
          answer: 0,
          topic: "Outside knowledge",
          explanation: "<p>A pendulum's period lengthens when gravity is weaker, so the Moon's lower gravity gives a longer period.</p><p>'The same' ignores that period depends on gravity, not just length.</p>"
        }
      ]
    },
    {
      title: "Passage V — Research Summaries",
      intro: "Microbiologists studied how temperature and an antibiotic affect the growth of a bacterium.",
      html: "<p><b>Experiment 1:</b> Identical broth cultures were incubated for 24 hours at five temperatures, and the bacterial count (millions of cells per mL) was measured (Table 1).</p><p><b>Experiment 2:</b> Cultures were grown at 37°C with different doses of an antibiotic, and the count was measured after 24 hours (Table 2).</p><p><b>Experiment 3:</b> A tube of sterile broth with no bacteria added was incubated at 37°C; its count remained 0.</p><div class='fig'><div class='fig-title'>Table 1: Bacterial count by temperature</div><table class='data-table'><thead><tr><th>Temp (°C)</th><th>Count (millions/mL)</th></tr></thead><tbody><tr><td>10</td><td>2</td></tr><tr><td>20</td><td>15</td></tr><tr><td>30</td><td>60</td></tr><tr><td>37</td><td>120</td></tr><tr><td>45</td><td>20</td></tr></tbody></table></div><div class='fig'><div class='fig-title'>Table 2: Bacterial count by antibiotic dose (37°C)</div><table class='data-table'><thead><tr><th>Dose (µg/mL)</th><th>Count (millions/mL)</th></tr></thead><tbody><tr><td>0</td><td>120</td></tr><tr><td>2</td><td>70</td></tr><tr><td>4</td><td>25</td></tr><tr><td>8</td><td>5</td></tr></tbody></table></div>",
      questions: [
        {
          n: 28,
          prompt: "According to Table 1, as temperature rose from 10°C to 37°C, the bacterial count:",
          choices: ["decreased", "stayed constant", "increased", "increased, then decreased"],
          answer: 2,
          topic: "Trends in data",
          explanation: "<p>Across 10, 20, 30, and 37°C the count climbs 2, 15, 60, 120 million/mL — a steady increase over that range.</p><p>The drop at 45°C is outside the 10-to-37°C range the question asks about, so 'increased, then decreased' does not apply here.</p>"
        },
        {
          n: 29,
          prompt: "According to Table 1, the greatest bacterial count occurred at a temperature of:",
          choices: ["10°C", "20°C", "37°C", "45°C"],
          answer: 2,
          topic: "Locating data",
          explanation: "<p>The count peaks at 120 million/mL at 37°C, the highest value in Table 1.</p><p>45°C is the trap — it is the highest temperature, but its count (20) is far lower.</p>"
        },
        {
          n: 30,
          prompt: "According to Table 2, as the antibiotic dose increased, the bacterial count:",
          choices: ["decreased", "increased", "stayed constant", "increased, then decreased"],
          answer: 0,
          topic: "Trends in data",
          explanation: "<p>Count falls 120, 70, 25, 5 million/mL as the dose rises from 0 to 8 µg/mL.</p><p>No value rises, so 'increased' is incorrect.</p>"
        },
        {
          n: 31,
          prompt: "The main purpose of Experiment 3 (sterile broth, no bacteria) was to:",
          choices: ["add antibiotic to the culture", "raise the incubation temperature", "grow more bacteria", "check that the broth was sterile (free of contamination)"],
          answer: 3,
          topic: "Experimental design",
          explanation: "<p>A no-bacteria tube that stays at a count of 0 confirms the broth was not contaminated, so growth in the other tubes came from the added bacteria.</p><p>It contains no bacteria, so it cannot be intended to grow more of them.</p>"
        },
        {
          n: 32,
          prompt: "Based on Table 2, the bacterial count at an antibiotic dose of 6 µg/mL would most likely be about:",
          choices: ["about 70 million/mL", "about 15 million/mL", "about 120 million/mL", "about 40 million/mL"],
          answer: 1,
          topic: "Predicting new trials",
          explanation: "<p>6 µg/mL lies between 4 µg/mL (25) and 8 µg/mL (5), so a count near 15 million/mL fits.</p><p>70 million/mL is the 2 µg/mL value, at a much lower dose.</p>"
        },
        {
          n: 33,
          prompt: "In Experiment 2, which was the independent variable?",
          choices: ["Antibiotic dose", "Temperature", "Bacterial count", "Incubation time"],
          answer: 0,
          topic: "Controls & variables",
          explanation: "<p>Experiment 2 varied the antibiotic dose while holding temperature at 37°C and time at 24 hours.</p><p>Bacterial count is the dependent variable — the measured result.</p>"
        },
        {
          n: 34,
          prompt: "Experiment 2 was carried out at 37°C because, according to Experiment 1, that temperature:",
          choices: ["killed the bacteria", "had no bacteria present", "produced the greatest bacterial growth", "was the coldest tested"],
          answer: 2,
          topic: "Combining data sources",
          explanation: "<p>Table 1 shows 37°C gave the highest count (120 million/mL), so testing the antibiotic there challenges the bacteria under their best growth conditions.</p><p>37°C is one of the warmer temperatures tested, not the coldest.</p>"
        }
      ]
    },
    {
      title: "Passage VI — Data Representation",
      intro: "Astronomers catalogued five planets orbiting other stars, measuring how much each planet dims its star during a transit and recording each planet's orbit and size.",
      html: "<p>Figure 1 shows the transit depth (the percentage by which the star's light dims) for each planet. Table 1 lists each planet's orbital period, mass, and radius.</p><div class='fig'><div class='fig-title'>Figure 1: Transit depth by planet</div><svg viewBox='0 0 360 240' class='diagram' role='img' aria-label='Bar chart of transit depth as a percent of starlight for planets P1 through P5'><line x1='50' y1='200' x2='340' y2='200' stroke='currentColor' stroke-width='1.5'/><line x1='50' y1='200' x2='50' y2='20' stroke='currentColor' stroke-width='1.5'/><text x='44' y='204' fill='currentColor' font-size='10' text-anchor='end'>0</text><text x='44' y='144' fill='currentColor' font-size='10' text-anchor='end'>1</text><text x='44' y='84' fill='currentColor' font-size='10' text-anchor='end'>2</text><text x='44' y='24' fill='currentColor' font-size='10' text-anchor='end'>3</text><rect x='60' y='170' width='30' height='30' fill='currentColor'/><rect x='110' y='128' width='30' height='72' fill='currentColor'/><rect x='160' y='80' width='30' height='120' fill='currentColor'/><rect x='210' y='170' width='30' height='30' fill='currentColor'/><rect x='260' y='32' width='30' height='168' fill='currentColor'/><text x='75' y='214' fill='currentColor' font-size='10' text-anchor='middle'>P1</text><text x='125' y='214' fill='currentColor' font-size='10' text-anchor='middle'>P2</text><text x='175' y='214' fill='currentColor' font-size='10' text-anchor='middle'>P3</text><text x='225' y='214' fill='currentColor' font-size='10' text-anchor='middle'>P4</text><text x='275' y='214' fill='currentColor' font-size='10' text-anchor='middle'>P5</text><text x='160' y='232' fill='currentColor' font-size='12'>Planet</text></svg></div><div class='fig'><div class='fig-title'>Table 1: Planet properties</div><table class='data-table'><thead><tr><th>Planet</th><th>Orbital period (days)</th><th>Mass (Earth=1)</th><th>Radius (Earth=1)</th></tr></thead><tbody><tr><td>P1</td><td>4</td><td>1</td><td>1</td></tr><tr><td>P2</td><td>12</td><td>6</td><td>2</td></tr><tr><td>P3</td><td>45</td><td>15</td><td>3</td></tr><tr><td>P4</td><td>8</td><td>4</td><td>1</td></tr><tr><td>P5</td><td>320</td><td>300</td><td>11</td></tr></tbody></table></div>",
      questions: [
        {
          n: 35,
          prompt: "According to Figure 1, which planet has the greatest transit depth?",
          choices: ["P3", "P5", "P2", "P1"],
          answer: 1,
          topic: "Reading graphs",
          explanation: "<p>The P5 bar is the tallest, reaching about 2.8% on the transit-depth scale.</p><p>P3 is the second tallest (about 2.0%), a trap for students who stop short of the highest bar.</p>"
        },
        {
          n: 36,
          prompt: "Based on Figure 1 and Table 1, which property best predicts a planet's transit depth?",
          choices: ["orbital period", "mass", "distance from Earth", "radius"],
          answer: 3,
          topic: "Combining data sources",
          explanation: "<p>P1 and P4 have equal radius (1) and equal transit depth (about 0.5%) even though their masses differ, so depth tracks radius, and P5 with the largest radius has the deepest transit.</p><p>Mass fails as a predictor because P1 and P4 differ in mass yet show the same depth.</p>"
        },
        {
          n: 37,
          prompt: "Planets P1 and P4 have the same radius. According to Figure 1, their transit depths are:",
          choices: ["very different", "much greater for P1", "about the same", "much greater for P4"],
          answer: 2,
          topic: "Comparing figures",
          explanation: "<p>The P1 and P4 bars are the same height (about 0.5%), matching their equal radii in Table 1.</p><p>'Much greater for P4' wrongly assumes P4's larger mass increases its transit depth.</p>"
        },
        {
          n: 38,
          prompt: "According to Table 1, the orbital period of planet P3 is:",
          choices: ["45 days", "12 days", "320 days", "8 days"],
          answer: 0,
          topic: "Locating data",
          explanation: "<p>The P3 row lists an orbital period of 45 days.</p><p>320 days is P5's period, the trap for students who read the wrong row.</p>"
        },
        {
          n: 39,
          prompt: "According to Table 1, planets with greater mass tend to have:",
          choices: ["shorter orbital periods", "longer orbital periods", "the same orbital period", "no orbital period"],
          answer: 1,
          topic: "Trends in data",
          explanation: "<p>Ordered by mass (1, 4, 6, 15, 300), the periods rise together (4, 8, 12, 45, 320 days), so greater mass goes with longer periods.</p><p>'Shorter orbital periods' reverses the actual trend.</p>"
        },
        {
          n: 40,
          prompt: "Density equals mass divided by volume. Because P1 and P4 have the same radius but P4 has greater mass, P4 must be:",
          choices: ["less dense than P1", "the same density as P1", "hotter than P1", "denser than P1"],
          answer: 3,
          topic: "Outside knowledge",
          explanation: "<p>Equal radius means equal volume, so the planet with more mass (P4, at 4 Earth masses vs 1) has the greater density.</p><p>'The same density' ignores that the masses differ while the volumes are equal.</p>"
        }
      ]
    }
  ]
};
