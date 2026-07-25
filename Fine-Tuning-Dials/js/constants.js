// js/constants.js
//
// Data module for "Fine-Tuning Dials".
//
// Every entry below is one physical constant that cosmologists cite in the
// "fine-tuning of the universe" argument (see Martin Rees, "Just Six
// Numbers"; Barrow & Tipler, "The Anthropic Cosmological Principle"; the
// Hoyle carbon-resonance story; Oberhummer/Livio sensitivity studies; and
// Penrose's phase-space argument for the initial entropy of the universe).
//
// DIAL MODEL
// ----------
// Continuous dials use a *log-scale* model: the knob position is a real
// number `t` and the physical value is:
//
//     value(t) = observedValue * 10^t
//
// so t = 0 always reproduces the real, observed value of the constant, and
// the on-screen readout can show "10^t x observed". `tMin`/`tMax` bound how
// far the knob can be turned in either direction; `tStep`/`tCoarseStep` are
// the fine (arrow key) and coarse (Page Up/Down) keyboard increments.
//
// The one exception is the number of spatial dimensions (D), which is a
// discrete stepper: scaleType 'stepper' with a `values` array and one band
// per value (matched by array index, not by a numeric range).
//
// BANDS
// -----
// `bands` is an ascending list of { tMax, severity, headline, text }. The
// active band for a given `t` is the first one whose `tMax` is >= t (the
// final band always has tMax = Infinity, catching everything above the
// previous cutoff). Severity is one of:
//   'observed'     - matches the real universe (green)
//   'marginal'     - noticeably different but not obviously lethal (yellow)
//   'hostile'      - actively hostile to stars/chemistry/structure (orange)
//   'catastrophic' - no stars, no chemistry, or no structure at all (red)

export const SEVERITY = {
  OBSERVED: 'observed',
  MARGINAL: 'marginal',
  HOSTILE: 'hostile',
  CATASTROPHIC: 'catastrophic',
};

// Worst-to-best ordering, used for aggregating the overall universe status.
export const SEVERITY_ORDER = [
  SEVERITY.CATASTROPHIC,
  SEVERITY.HOSTILE,
  SEVERITY.MARGINAL,
  SEVERITY.OBSERVED,
];

export const SEVERITY_LABEL = {
  [SEVERITY.OBSERVED]: 'Observed',
  [SEVERITY.MARGINAL]: 'Marginal',
  [SEVERITY.HOSTILE]: 'Hostile',
  [SEVERITY.CATASTROPHIC]: 'Catastrophic',
};

// Rough "habitability points" used to build the aggregate gauge. Not a
// physical quantity -- just a UI heuristic so the summary bar has something
// smooth to animate.
export const SEVERITY_SCORE = {
  [SEVERITY.OBSERVED]: 100,
  [SEVERITY.MARGINAL]: 55,
  [SEVERITY.HOSTILE]: 20,
  [SEVERITY.CATASTROPHIC]: 0,
};

export const CONSTANTS = [
  // ------------------------------------------------------------------
  {
    id: 'gravity',
    name: 'Gravitational Constant',
    symbol: 'G',
    unit: 'N·m²·kg⁻²',
    observedValue: 6.674e-11,
    scaleType: 'log',
    tMin: -6,
    tMax: 6,
    tStep: 0.02,
    tCoarseStep: 0.5,
    blurb:
      'Sets how strongly matter attracts itself: the difference between gas that never collapses and gas that collapses into stars, or into black holes.',
    learnMore:
      'Gravity is by far the weakest of the four forces, and that weakness is essential: it lets clouds of gas collapse slowly, over hundreds of millions of years, into stable, long-lived stars. Martin Rees frames this as the constant N (see the separate dial): if gravity were only somewhat stronger, stars would form faster, burn hotter, and exhaust their fuel in millions rather than billions of years -- nowhere near enough time for planets to cool, chemistry to complexify, and biological evolution to run its course. If gravity were much weaker, gas clouds could never overcome their own thermal pressure and internal turbulence to collapse at all, and the universe would stay a smooth, diffuse mist forever.',
    bands: [
      {
        tMax: -3,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Gravity too weak to ignite a single star',
        text: 'Self-gravity is too feeble to overcome gas pressure and turbulence at any scale. Clouds of hydrogen and helium drift apart faster than they can collapse. No protostars ever form; the cosmos remains an ever-thinning, starless haze of primordial gas.',
      },
      {
        tMax: -1,
        severity: SEVERITY.HOSTILE,
        headline: 'Only vast, barely-glowing gas balls condense',
        text: 'Collapse happens, but so slowly and weakly that any "stars" that form are enormous, diffuse, and only marginally hot enough to sustain fusion. They flicker for eons at low output, radiating almost no usable energy toward any orbiting planets.',
      },
      {
        tMax: -0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'Cool, sluggish stars and inert planets',
        text: 'Stars ignite, but weaker compression means cooler cores and thinner convection. Rocky planets receive less gravitational and radiogenic heating, so plate tectonics and planetary magnetic fields -- both plausibly important for surface life -- are feeble or absent.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.OBSERVED,
        headline: 'A stable stage for billion-year chemistry',
        text: 'Gravity is just weak enough to let stars burn steadily for billions of years, and just strong enough to compact rocky planets with active interiors. This narrow balance gives evolution the time -- and planets the geology -- it needs.',
      },
      {
        tMax: 1,
        severity: SEVERITY.MARGINAL,
        headline: 'Stars burn fast and hot',
        text: 'Stronger self-gravity compresses stellar cores harder, driving up fusion rates. Stars are noticeably hotter and shorter-lived than the Sun, compressing the "habitable window" for any nearby planet into a few hundred million years.',
      },
      {
        tMax: 3,
        severity: SEVERITY.HOSTILE,
        headline: 'Stellar lifetimes collapse to millions of years',
        text: 'Gravitational compression is so strong that stars race through their fuel in a few million years before collapsing or exploding. That is far too short a window for slow processes like plate tectonics or biological evolution to get started.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Matter collapses directly into black holes',
        text: 'Any density fluctuation collapses almost immediately under crushing self-gravity, skipping the stable "star" phase entirely and forming black holes or neutron-star-like remnants straight out of the primordial gas. Nothing lingers long enough to build chemistry.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'strong-force',
    name: 'Strong Nuclear Force',
    symbol: 'Î±â‚› (relative)',
    unit: 'Ã— nominal QCD coupling',
    observedValue: 1,
    scaleType: 'log',
    tMin: -0.035,
    tMax: 0.035,
    tStep: 0.0005,
    tCoarseStep: 0.01,
    blurb:
      'Binds quarks into protons and neutrons, and binds nuclei together. A shift of only a few percent either way rewrites all of nuclear physics.',
    learnMore:
      'The strong force is exquisitely balanced against the fact that two protons alone ("diproton") are almost -- but not quite -- bound, and a proton and neutron together (deuteron) are just barely bound. Weaken the strong force a few percent and the deuteron comes unbound, closing off the deuterium bottleneck that all stellar fusion depends on. Strengthen it a few percent and the diproton becomes bound too, letting ordinary hydrogen fuse catastrophically fast. Either direction removes the slow, billion-year-hydrogen-burning stars our universe relies on.',
    bands: [
      {
        tMax: -0.021,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'The deuteron unbinds -- fusion never starts',
        text: 'Weakened by several percent, the proton-neutron bond (deuteron) is no longer stable. The first step of every stellar fusion chain fails outright. Stars can only shine dimly from gravitational contraction; hydrogen never burns into helium anywhere in the cosmos.',
      },
      {
        tMax: -0.009,
        severity: SEVERITY.HOSTILE,
        headline: 'Nuclei barely hold together',
        text: 'Nuclear binding is weak enough that fusion yields collapse and many nuclei are unstable. Stars that do ignite burn cold and faint, and almost nothing heavier than helium is synthesized inside them.',
      },
      {
        tMax: -0.002,
        severity: SEVERITY.MARGINAL,
        headline: 'Underpowered fusion, anemic stars',
        text: 'Fusion proceeds, but less efficiently than observed. Stars are somewhat dimmer and cooler than expected for their mass, and the triple-alpha production of carbon and oxygen runs more slowly.',
      },
      {
        tMax: 0.002,
        severity: SEVERITY.OBSERVED,
        headline: 'Deuterium bridges the gap, stars burn for eons',
        text: 'The deuteron is bound but the diproton is not -- exactly the knife-edge that lets hydrogen fuse slowly, through the deuterium bottleneck, over billions of years rather than all at once.',
      },
      {
        tMax: 0.009,
        severity: SEVERITY.MARGINAL,
        headline: 'Fusion runs slightly hot',
        text: 'Nuclear binding is a touch stronger than observed. Fusion reaction rates rise, stellar cores run hotter, and heavier nuclei are marginally more stable -- a subtly different but not obviously lethal universe.',
      },
      {
        tMax: 0.021,
        severity: SEVERITY.HOSTILE,
        headline: 'The diproton edges toward stability',
        text: 'Two protons begin to bind on their own. Hydrogen fusion no longer needs the slow beta-decay step, so stars burn through their fuel far faster and hotter than the Sun, and primordial hydrogen is consumed unusually quickly.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'All primordial hydrogen fuses within minutes',
        text: 'The diproton is fully bound, so hydrogen fuses almost on contact. Within minutes of the Big Bang, essentially all hydrogen converts to helium and heavier nuclei. There is no hydrogen left over for long-lived stars, hydrocarbons, or water.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'weak-force',
    name: 'Weak Nuclear Force',
    symbol: 'α_w (relative)',
    unit: 'Ã— nominal weak coupling',
    observedValue: 1,
    scaleType: 'log',
    tMin: -4,
    tMax: 4,
    tStep: 0.02,
    tCoarseStep: 0.5,
    blurb:
      'Governs neutron decay, the proton-to-neutron ratio from the Big Bang, and whether supernovae successfully blast heavy elements into space.',
    learnMore:
      'The weak force controls two crucial things at once: the neutron/proton ratio that froze in during Big Bang nucleosynthesis (which sets how much helium versus hydrogen the universe starts with), and whether the neutrino burst from a collapsing stellar core can deposit enough energy in the outer layers to blow a star apart as a supernova. Both processes are delicately tuned to the weak force\'s observed strength.',
    bands: [
      {
        tMax: -2.5,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Supernovae fizzle -- no heavy elements escape',
        text: 'Neutrinos interact so weakly that a collapsing stellar core cannot dump its energy into the outer envelope. Core-collapse supernovae fail to explode; heavy elements stay locked inside collapsed remnants and are never seeded into new stars or planets.',
      },
      {
        tMax: -1,
        severity: SEVERITY.HOSTILE,
        headline: 'Weak, sputtering supernovae',
        text: 'Supernova explosions are anemic, dispersing only a fraction of the heavy elements they forge. Interstellar clouds are enrichment-starved, and rocky planet formation is stunted for want of iron, silicon, and other metals.',
      },
      {
        tMax: -0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'Thin elemental seeding',
        text: 'Element dispersal is less efficient than observed. Later generations of stars and planets form with noticeably lower heavy-element content, making rocky, metal-rich worlds rarer.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.OBSERVED,
        headline: 'The right neutron fraction, exploding stars',
        text: 'Big Bang nucleosynthesis freezes out the observed hydrogen-to-helium ratio, and core-collapse supernovae explode vigorously, scattering carbon, oxygen, iron, and everything in between across the galaxy.',
      },
      {
        tMax: 1,
        severity: SEVERITY.MARGINAL,
        headline: 'A helium-heavier early universe',
        text: 'The primordial neutron/proton freeze-out ratio shifts, leaving more helium and less hydrogen than observed after the Big Bang. Later star and planet formation proceeds, but with a different starting chemical mix.',
      },
      {
        tMax: 2.5,
        severity: SEVERITY.HOSTILE,
        headline: 'Neutrinos trapped, hydrogen scarce',
        text: 'Neutrinos are so tightly coupled to matter that supernova cores hold onto their energy instead of ejecting it, while early-universe nucleosynthesis converts an unusually large share of nucleons into helium, leaving comparatively little hydrogen behind.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Almost no hydrogen survives the Big Bang',
        text: 'Weak interaction rates are so far from observed that nearly all neutrons and protons combine into helium and heavier nuclei within minutes of the Big Bang. Little hydrogen remains for water, organic chemistry, or long-lived hydrogen-burning stars.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'fine-structure',
    name: 'Electromagnetic Force (Fine-Structure Constant)',
    symbol: 'α',
    unit: 'dimensionless',
    observedValue: 7.297e-3,
    scaleType: 'log',
    tMin: -2,
    tMax: 2,
    tStep: 0.01,
    tCoarseStep: 0.25,
    blurb:
      'Sets the strength of electromagnetism: chemical bond energies, atomic structure, and the Coulomb barrier that fusion must overcome.',
    learnMore:
      'The fine-structure constant, Î± â‰ˆ 1/137, measures how strongly charged particles interact. It governs the size and stability of atomic orbitals, the strength of chemical bonds, and -- because nuclei are positively charged -- the Coulomb repulsion that fusion reactions must tunnel through. A much smaller Î± leaves electromagnetism too weak to hold atoms together; a much larger Î± raises the fusion barrier so high that stars struggle to ignite, and pushes heavy nuclei toward instability as electrostatic repulsion overwhelms the strong force.',
    bands: [
      {
        tMax: -1,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Electromagnetism too weak for atoms',
        text: 'Electromagnetic attraction is too feeble to hold electrons in stable orbitals around nuclei. Without bound atoms there is no chemistry, no molecules, and no structured matter beyond a diffuse plasma of charges.',
      },
      {
        tMax: -0.4,
        severity: SEVERITY.HOSTILE,
        headline: 'Fragile atoms, promiscuous fusion',
        text: 'Weak charge repulsion lowers the Coulomb barrier, so nuclei fuse too easily and stars burn through their fuel far faster than observed. Chemical bonds are correspondingly loose and easily broken by ordinary thermal jostling.',
      },
      {
        tMax: -0.1,
        severity: SEVERITY.MARGINAL,
        headline: 'Loosely bonded chemistry',
        text: 'Chemical bonds are measurably weaker than observed, destabilizing many molecules at biologically relevant temperatures, though basic atomic structure still holds together.',
      },
      {
        tMax: 0.1,
        severity: SEVERITY.OBSERVED,
        headline: 'Atoms, molecules, and stellar fusion in balance',
        text: 'Electromagnetism is strong enough for rich, stable chemistry, yet weak enough that the Coulomb barrier to nuclear fusion can still be overcome inside stellar cores.',
      },
      {
        tMax: 0.4,
        severity: SEVERITY.MARGINAL,
        headline: 'Brittle heavy nuclei',
        text: 'Increased charge repulsion makes the heaviest nuclei more prone to radioactive decay and spontaneous fission, thinning out the upper end of the periodic table, while lighter-element chemistry remains largely workable.',
      },
      {
        tMax: 1,
        severity: SEVERITY.HOSTILE,
        headline: 'Fusion stalls behind a towering Coulomb barrier',
        text: 'The electrostatic barrier between nuclei grows so high that stellar cores struggle to sustain fusion at all. "Stars" exist mainly as inert, gravitationally contracting balls of gas rather than fusion furnaces.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Only hydrogen can exist -- if that',
        text: 'Electromagnetic repulsion overwhelms the strong force in every nucleus heavier than hydrogen, and electron energy levels become wildly relativistic. Fusion is essentially impossible and chemistry as we know it cannot occur.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'em-gravity-ratio',
    name: 'EM-to-Gravity Force Ratio',
    symbol: 'N',
    unit: 'dimensionless ratio',
    observedValue: 2.3e39,
    scaleType: 'log',
    tMin: -5,
    tMax: 5,
    tStep: 0.02,
    tCoarseStep: 0.5,
    blurb:
      "Dirac's 'large number': electromagnetic force between two protons is roughly 10^39 times stronger than their mutual gravity. That gap sets how large and long-lived stars can be.",
    learnMore:
      'This dimensionless ratio compares the electric repulsion between two protons to their gravitational attraction. Because it is so enormous, gravity only matters in bulk, over huge numbers of particles -- which is precisely why stars must contain roughly 10^57 atoms before self-gravity can compress them enough to ignite fusion, and why stellar lifetimes stretch to billions of years. Shrinking the ratio (relatively stronger gravity) shrinks viable stars and their lifetimes; growing it delays structure formation.',
    bands: [
      {
        tMax: -2.5,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Only planet-sized "stars" are possible',
        text: 'Gravity is relatively so much stronger that any object massive enough to ignite fusion is crushed within its own lifetime almost instantly. Viable stars would need to be absurdly small, with main-sequence lifetimes measured in centuries -- far too brief for anything to evolve nearby.',
      },
      {
        tMax: -1,
        severity: SEVERITY.HOSTILE,
        headline: 'Short-lived, undersized stars',
        text: 'Relatively stronger gravity forces stars to be much smaller and to burn out within a few million years -- long enough for stars to exist, far too short for planets to develop stable, complex biospheres.',
      },
      {
        tMax: -0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'A compressed habitable window',
        text: 'Stars form readily but live shorter, hotter lives than the Sun. Any window for planetary evolution and biology is squeezed into a few hundred million years.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.OBSERVED,
        headline: 'Billion-year stars, room to evolve',
        text: 'Gravity is just weak enough, relative to electromagnetism, that stars can be enormous, long-lived furnaces -- burning steadily for billions of years, giving planets ample time to cool and biology time to evolve.',
      },
      {
        tMax: 1,
        severity: SEVERITY.MARGINAL,
        headline: 'Sluggish structure formation',
        text: 'Relatively weaker gravity slows the collapse of gas into stars and galaxies; cosmic structure still forms, but noticeably later in the universe\'s history than observed.',
      },
      {
        tMax: 2.5,
        severity: SEVERITY.HOSTILE,
        headline: 'Diffuse, rare, late-forming galaxies',
        text: 'Gravitational clumping is so weak relative to electromagnetic and thermal pressure that only the rarest, largest gas clouds ever collapse. Stars and galaxies are scarce, dim, and appear very late in cosmic history.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Gravity never wins -- no structure ever forms',
        text: 'Relative to electromagnetic and thermal pressure, gravity is too weak at any practical scale to pull gas into collapse. The universe remains a smooth, structureless plasma or gas for all time -- no stars, no galaxies, nothing.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'cosmological-constant',
    name: 'Cosmological Constant (Dark Energy Density)',
    symbol: 'Î©_Î›',
    unit: 'dimensionless (Î©_Î›)',
    observedValue: 0.6889,
    scaleType: 'log',
    tMin: -8,
    tMax: 8,
    tStep: 0.03,
    tCoarseStep: 0.5,
    blurb:
      'The energy density of empty space, driving the accelerating expansion of the universe. Even a modestly larger value would have ripped galaxies apart before they could form.',
    learnMore:
      'The cosmological constant is the most extreme fine-tuning problem in physics: naive quantum field theory predicts a vacuum energy density roughly 10^120 times larger than what is observed. Had it been only a few hundred times larger than the value we measure, cosmic acceleration would have overwhelmed gravity before any galaxies could condense out of the early, nearly uniform gas. Reduced toward zero, or flipped negative and large, the universe instead recollapses in a "Big Crunch" long before life-bearing structures can form.',
    bands: [
      {
        tMax: -6,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'A Big Crunch within cosmic infancy',
        text: 'Pushed toward zero or effectively reversed to a large negative value, the vacuum energy no longer drives expansion but hastens a gravitational recollapse. The universe recontracts into a "Big Crunch" long before stars, planets, or life have any chance to develop.',
      },
      {
        tMax: -1,
        severity: SEVERITY.HOSTILE,
        headline: 'An overly clingy cosmos',
        text: 'With dark energy suppressed far below the observed value, gravity dominates cosmic dynamics much more strongly. Structure formation is hyperactive early on, but the universe\'s ultimate fate trends toward a premature slowdown and recontraction.',
      },
      {
        tMax: -0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'A slower-accelerating cosmos',
        text: 'Cosmic acceleration is present but noticeably weaker than observed. Galaxies and clusters form in essentially the same way, though the universe\'s long-term expansion history diverges from our own.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.OBSERVED,
        headline: 'Galaxies finish forming before acceleration takes over',
        text: 'Dark energy is negligible during the epoch of galaxy formation, then gradually takes over the expansion in the last few billion years -- exactly late enough to let matter clump into the rich structure of stars and galaxies we observe.',
      },
      {
        tMax: 1,
        severity: SEVERITY.MARGINAL,
        headline: 'Acceleration arrives early',
        text: 'A somewhat larger vacuum energy causes accelerated expansion to kick in earlier in cosmic history, trimming the amount of large-scale structure that has time to form, though galaxies like the Milky Way can still emerge.',
      },
      {
        tMax: 4,
        severity: SEVERITY.HOSTILE,
        headline: 'Expansion outruns gravity before galaxies form',
        text: 'Cosmic acceleration becomes strong enough, early enough, to fling apart the very gas clouds that would otherwise have collapsed into galaxies. Only the smallest, earliest-forming structures survive; most of the universe stays a thin, ever-accelerating gas.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Space tears itself apart before any structure forms',
        text: 'Vacuum energy density is so extreme that the accelerating expansion of space overwhelms every other force almost immediately. Matter is diluted and flung apart before gravity can pull together so much as a single protogalaxy.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'matter-density',
    name: 'Initial Matter Density Parameter',
    symbol: 'Ω_m',
    unit: 'dimensionless (Ω_m)',
    observedValue: 0.315,
    scaleType: 'log',
    tMin: -4,
    tMax: 4,
    tStep: 0.02,
    tCoarseStep: 0.5,
    blurb:
      'The balance between matter\'s gravitational pull and the expansion rate of the early universe -- tuned to roughly one part in 10^60 near the Big Bang.',
    learnMore:
      'Omega compares the actual density of matter to the "critical" density that would make space exactly flat. Too high, and gravity wins decisively: the universe stops expanding and recollapses. Too low, and expansion wins decisively: matter thins out before it can clump into galaxies. The observed value threads a needle so narrow that at the Planck era it had to be tuned to roughly one part in 10^60 -- the famous cosmological "flatness problem".',
    bands: [
      {
        tMax: -2,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Matter thins out before gravity can act',
        text: 'The universe is so under-dense that expansion dilutes matter far faster than gravity can pull it together. No galaxies, no stars -- just an ever-thinning gas coasting outward forever.',
      },
      {
        tMax: -0.5,
        severity: SEVERITY.HOSTILE,
        headline: 'Only the rarest peaks collapse',
        text: 'Expansion dominates strongly over self-gravity. Only the very densest primordial peaks manage to collapse, producing a sparse, dim scattering of small, isolated galaxies across an otherwise empty cosmos.',
      },
      {
        tMax: -0.05,
        severity: SEVERITY.MARGINAL,
        headline: 'A thinly populated universe',
        text: 'Galaxy formation proceeds, but structure is sparser and less massive than observed -- fewer and smaller galaxy clusters, with more empty space between them.',
      },
      {
        tMax: 0.05,
        severity: SEVERITY.OBSERVED,
        headline: 'A flat universe, rich with galaxies',
        text: 'Expansion and gravity balance closely enough that space is nearly flat. Structure formation proceeds steadily over billions of years, building the rich population of galaxies, clusters, and stars we observe.',
      },
      {
        tMax: 0.5,
        severity: SEVERITY.MARGINAL,
        headline: 'Gravity gains the upper hand',
        text: 'Matter density runs somewhat above critical. Structure forms readily and densely, but the universe\'s overall expansion is measurably slowing, foreshadowing an eventual reversal.',
      },
      {
        tMax: 2,
        severity: SEVERITY.HOSTILE,
        headline: 'Heading toward an early recollapse',
        text: 'Gravity dominates strongly enough that cosmic expansion halts and reverses within a few billion years -- likely before slow processes like biological evolution have time to unfold on any planet.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'The universe recollapses almost immediately',
        text: 'Matter density so far exceeds critical density that gravitational self-attraction halts the expansion and reverses it within a cosmic eyeblink -- a "Big Crunch" long before any structure, let alone life, could possibly form.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'proton-electron-ratio',
    name: 'Proton-to-Electron Mass Ratio',
    symbol: 'Î¼ = mâ‚š/mâ‚‘',
    unit: 'dimensionless',
    observedValue: 1836.15,
    scaleType: 'log',
    tMin: -3,
    tMax: 3,
    tStep: 0.01,
    tCoarseStep: 0.25,
    blurb:
      'Protons outweigh electrons roughly two thousand to one -- the reason nuclei sit still while electrons zip around them, giving molecules well-defined shapes.',
    learnMore:
      'Because protons are so much heavier than electrons, nuclei move slowly compared to the electrons orbiting them (the Born-Oppenheimer approximation). This clean separation of timescales is what gives molecules well-defined, stable shapes and predictable vibrational spectra. If the mass ratio were closer to one, nuclear and electronic motion would tangle together, and the very idea of a fixed "molecular structure" would break down.',
    bands: [
      {
        tMax: -2,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Nuclei and electrons move at the same pace',
        text: 'With proton and electron masses nearly equal, there is no separation between fast electronic motion and slow nuclear motion. Stable, well-defined molecular geometry becomes meaningless; matter behaves more like a symmetric plasma than structured chemistry.',
      },
      {
        tMax: -1,
        severity: SEVERITY.HOSTILE,
        headline: 'Molecular shapes blur together',
        text: 'Nuclei are only modestly heavier than electrons, so vibrational and electronic motion occur on comparable timescales. Molecular bonds are poorly defined and chemical reaction behavior becomes erratic and unpredictable.',
      },
      {
        tMax: -0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'Strained chemical bonding',
        text: 'The separation between nuclear and electronic motion is weaker than observed, subtly distorting bond lengths, vibrational spectra, and reaction rates across the board.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.OBSERVED,
        headline: 'Clean separation gives chemistry its structure',
        text: 'Protons are so much heavier than electrons that nuclei sit nearly still while electrons zip around them -- the foundation for stable, well-defined molecular shapes and predictable chemical behavior.',
      },
      {
        tMax: 1,
        severity: SEVERITY.MARGINAL,
        headline: 'Slightly stiffer molecules',
        text: 'Heavier nuclei relative to electrons shift bond lengths and vibrational frequencies somewhat, but the qualitative machinery of chemistry keeps working.',
      },
      {
        tMax: 2,
        severity: SEVERITY.HOSTILE,
        headline: 'Reaction rates crawl to a halt',
        text: 'Nuclei are so much heavier that atomic and molecular size scales shrink and reaction rates plunge. Chemistry technically still exists, but proceeds at a pace too slow to support anything like biology.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Chemistry effectively freezes',
        text: 'Nuclei are so overwhelmingly heavier than electrons that electron clouds barely respond to nuclear motion at all. Chemical bonding becomes essentially rigid and reaction rates approach zero -- chemistry as an active process ceases.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'neutron-proton-diff',
    name: 'Neutron-Proton Mass Difference',
    symbol: 'Î”m',
    unit: 'MeV/c²',
    observedValue: 1.293,
    scaleType: 'log',
    tMin: -1.5,
    tMax: 1.5,
    tStep: 0.01,
    tCoarseStep: 0.25,
    blurb:
      'Neutrons outweigh protons by just 0.14%, enough that free neutrons decay but nuclei can still hold onto them -- the precise balance Big Bang nucleosynthesis depends on.',
    learnMore:
      'This tiny mass difference decides which particle is the ground state. Because the neutron is heavier, a free neutron eventually decays into a proton (beta decay), which is why hydrogen -- bare, stable protons -- is by far the most abundant element. If the gap were reversed, protons themselves would be able to decay into neutrons, and stable hydrogen (and by extension, water and every hydrocarbon) simply would not exist. If the gap were much larger, converting protons into neutrons during fusion becomes energetically expensive, stalling nucleosynthesis beyond hydrogen.',
    bands: [
      {
        tMax: -1,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Protons become unstable -- no hydrogen survives',
        text: 'Shrunk enough, the mass gap would let protons decay into neutrons rather than the reverse. Stable hydrogen -- bare, lone protons -- ceases to exist, taking water and all hydrogen-based chemistry with it.',
      },
      {
        tMax: -0.5,
        severity: SEVERITY.HOSTILE,
        headline: 'A destabilized neutron/proton balance',
        text: 'With the mass gap this small, free neutrons barely favor decaying to protons at all. The primordial neutron-to-proton ratio from the Big Bang skews dramatically, throwing off the helium abundance baked into the early universe.',
      },
      {
        tMax: -0.15,
        severity: SEVERITY.MARGINAL,
        headline: 'A shifted primordial element mix',
        text: 'The neutron-proton balance leans away from the observed ratio, altering how much helium versus hydrogen emerges from Big Bang nucleosynthesis, and subtly changing the fuel mix available to first-generation stars.',
      },
      {
        tMax: 0.15,
        severity: SEVERITY.OBSERVED,
        headline: 'Just unstable enough, just stable enough',
        text: 'Free neutrons decay (so early neutrons don\'t simply pile up), yet neutrons bound inside nuclei stay put -- giving the universe both abundant stable hydrogen and the neutron-rich nuclei needed for everything heavier.',
      },
      {
        tMax: 0.5,
        severity: SEVERITY.MARGINAL,
        headline: 'Fusion grows slightly more expensive',
        text: 'Converting protons into neutrons, a required step in stellar fusion chains, costs a bit more energy than observed, mildly throttling fusion rates in stars.',
      },
      {
        tMax: 1,
        severity: SEVERITY.HOSTILE,
        headline: 'Nucleosynthesis stalls at hydrogen and helium',
        text: 'The energetic cost of turning protons into neutrons during fusion becomes prohibitive. Stellar nucleosynthesis grinds to a halt at the lightest elements, and heavier nuclei -- carbon, oxygen, iron -- essentially never form.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'A universe of pure hydrogen',
        text: 'Neutron production is suppressed so severely that essentially no stable nuclei with neutrons can form. Only bare protons -- hydrogen -- exist anywhere; no other element in the periodic table is possible.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'fusion-efficiency',
    name: 'Hydrogen-to-Helium Fusion Efficiency',
    symbol: 'ε',
    unit: 'mass fraction (Î”E/mcÂ²)',
    observedValue: 0.007,
    scaleType: 'log',
    tMin: -0.15,
    tMax: 0.15,
    tStep: 0.001,
    tCoarseStep: 0.03,
    blurb:
      'The fraction of mass converted to energy when four hydrogen nuclei fuse into helium: about 0.7%. A shift of just 0.001 in either direction unravels stellar fusion entirely.',
    learnMore:
      "Rees identifies epsilon as one of his 'Just Six Numbers'. If epsilon were 0.006 instead of 0.007, the deuteron would not be bound and the proton-proton chain could never get started -- stars would have no nuclear fuel at all. If epsilon were 0.008, the diproton would become a bound, stable particle, and hydrogen would fuse essentially on contact, consuming almost all of it within minutes of the Big Bang.",
    bands: [
      {
        tMax: -0.08,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'The deuteron unbinds -- no fusion pathway exists',
        text: 'At this efficiency, the deuteron is no longer a bound state, so the first step of the proton-proton chain cannot occur. Stars have no nuclear fuel source and can only radiate the comparatively feeble heat of gravitational contraction.',
      },
      {
        tMax: -0.05,
        severity: SEVERITY.HOSTILE,
        headline: 'Fusion barely limps along',
        text: 'Nuclear binding is thin enough that fusion proceeds only weakly. Stars that do ignite are faint, unstable, and prone to sputtering out long before consuming a meaningful fraction of their hydrogen.',
      },
      {
        tMax: -0.02,
        severity: SEVERITY.MARGINAL,
        headline: 'Cooler, dimmer stars',
        text: 'Reduced fusion efficiency yields less energy per reaction. Stars settle onto a cooler, dimmer main sequence than observed, but the process still works well enough to power long stellar lifetimes.',
      },
      {
        tMax: 0.02,
        severity: SEVERITY.OBSERVED,
        headline: 'Steady, billion-year hydrogen burning',
        text: 'The proton-proton chain and CNO cycle convert hydrogen to helium at just the rate needed for stars to shine steadily for billions of years, forging carbon, oxygen, and the other elements planets and life depend on.',
      },
      {
        tMax: 0.05,
        severity: SEVERITY.MARGINAL,
        headline: 'A slightly more generous fusion yield',
        text: 'Fusion releases somewhat more energy per reaction than observed. Stellar structure shifts modestly -- marginally hotter, brighter stars -- without breaking the basic mechanism.',
      },
      {
        tMax: 0.08,
        severity: SEVERITY.HOSTILE,
        headline: 'The diproton edges toward stability',
        text: 'Nuclear binding strengthens enough that the diproton nearly becomes a bound state. Hydrogen begins fusing dramatically faster than the observed rate, burning through stellar fuel reserves in a fraction of the usual time.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'All primordial hydrogen fuses at once',
        text: 'The diproton is fully bound and fusion proceeds almost instantly on contact. Essentially all primordial hydrogen converts to helium and heavier elements within minutes of the Big Bang, leaving none for long-lived stars or water.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'density-fluctuations',
    name: 'Primordial Density Fluctuation Amplitude',
    symbol: 'Q',
    unit: 'Î”T/T (dimensionless)',
    observedValue: 1e-5,
    scaleType: 'log',
    tMin: -4,
    tMax: 4,
    tStep: 0.02,
    tCoarseStep: 0.5,
    blurb:
      'The tiny ripples in the early universe\'s density -- about one part in 100,000 -- that gravity slowly amplified into every galaxy, star, and planet.',
    learnMore:
      "Q measures the amplitude of the primordial density ripples imprinted on the cosmic microwave background. Too small, and gravity never has enough of a head start to overcome cosmic expansion before matter thins out -- structure never forms. Too large, and the ripples collapse so violently and so early that gas cannot cool and fragment into stars; instead it plunges directly into supermassive black holes, leaving a universe of monster black holes with little else.",
    bands: [
      {
        tMax: -3,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Ripples too faint to ever grow',
        text: 'Density fluctuations are so minuscule that gravity never gains enough of a foothold before cosmic expansion thins matter out. The universe stays essentially perfectly smooth, forever, with no galaxies and no stars.',
      },
      {
        tMax: -1.3,
        severity: SEVERITY.HOSTILE,
        headline: 'A nearly empty universe',
        text: 'Only the very largest, rarest fluctuations manage to collapse, and only after an enormous delay. The result is a sparse, dim scattering of isolated galaxies across vast, empty stretches of space.',
      },
      {
        tMax: -0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'Sparse, small, dim galaxies',
        text: 'Structure forms, but more slowly and less massively than observed -- fewer galaxies, less overall structure, and correspondingly fewer stars.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.OBSERVED,
        headline: 'A rich hierarchy of galaxies and stars',
        text: 'The observed ripples grow steadily under gravity into the full hierarchy of galaxies, clusters, and stars that fill the night sky -- neither too sparse nor too violent.',
      },
      {
        tMax: 1.3,
        severity: SEVERITY.MARGINAL,
        headline: 'Denser, more crowded structure',
        text: 'Structure forms faster and more densely than observed. Galaxies pack together more tightly, with more frequent close stellar encounters -- a busier but not necessarily uninhabitable universe.',
      },
      {
        tMax: 3,
        severity: SEVERITY.HOSTILE,
        headline: 'Gas collapses straight into black holes',
        text: 'Fluctuations are strong enough that overdense regions collapse violently before gas can cool and fragment into stars. Matter plunges directly into black holes, producing galaxies dominated by monster black holes rather than stellar populations.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'A universe of black holes and little else',
        text: 'Primordial fluctuations are so extreme that huge patches of the early universe collapse directly into black holes moments after the Big Bang, leaving a cosmos of black holes with essentially no stars, planets, or stable structure.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'dimensions',
    name: 'Spatial Dimensions',
    symbol: 'D',
    unit: 'spatial dimensions',
    observedValue: 3,
    scaleType: 'stepper',
    values: [1, 2, 3, 4, 5, 6, 7],
    tStep: 1,
    tCoarseStep: 1,
    blurb:
      'Only in exactly three spatial dimensions do stable planetary orbits and stable atomic orbitals both exist. This is a discrete stepper, not a continuous dial.',
    learnMore:
      "Barrow & Tipler note that both Newtonian gravity and electrostatics obey an inverse-square law only in three spatial dimensions -- and it is specifically the inverse-square law that permits closed, stable orbits (Bertrand's theorem) and stable, bound quantum states. In four or more dimensions, force laws fall off faster than inverse-square, and Ehrenfest showed that neither planetary orbits nor atomic electron orbitals remain stable: they spiral inward or fly apart. In one or two dimensions, the geometry itself is too simple to support the connectivity that complex structures (from stable orbits to something as basic as a digestive tract that doesn't split an organism in two) seem to require.",
    bands: [
      {
        value: 1,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Existence confined to a single line',
        text: 'With only one spatial dimension, matter can only be arranged front-to-back along a line. There is no room for independent structures to sit beside one another -- no atoms with orbiting electrons, no molecules, no bodies.',
      },
      {
        value: 2,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Flatland: no way to cross paths',
        text: 'In a two-dimensional universe, any tube passing through an organism (a digestive tract, a blood vessel) would divide it into two disconnected pieces, and nerve pathways could never cross. Stable orbits and complex, interconnected structures are believed to be impossible.',
      },
      {
        value: 3,
        severity: SEVERITY.OBSERVED,
        headline: 'Inverse-square laws, stable orbits, stable atoms',
        text: 'Gravity and electromagnetism both obey an inverse-square law only in three dimensions -- the unique condition that permits closed, stable planetary orbits and stable, long-lived atomic orbitals.',
      },
      {
        value: 4,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Orbits and orbitals both destabilize',
        text: 'Force laws fall off as 1/r³ instead of 1/r². Planetary orbits are no longer stable -- planets spiral into their star or fly off into space -- and, by the same instability, atomic electrons can no longer occupy stable orbitals.',
      },
      {
        value: 5,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Forces fall off even faster',
        text: 'With forces weakening as 1/r⁴, any bound orbits -- planetary or atomic -- are even less stable than in four dimensions. Persistent structure of any kind is essentially impossible.',
      },
      {
        value: 6,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'No stable bound states, macroscopic or atomic',
        text: 'Under a 1/r⁵ force law, stable bound orbits do not generically exist at any scale. Without stable atoms or stable orbits, no lasting structure -- chemical, planetary, or otherwise -- can form.',
      },
      {
        value: 7,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'A universe with no persistent structure',
        text: 'At even higher dimensionality, force laws fall off so steeply that nothing stays bound to anything else for long. Matter cannot organize into atoms, planets, or stars that persist over time.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'initial-entropy',
    name: 'Initial Entropy of the Universe',
    symbol: 'S_i',
    unit: 'Ã— actual primordial entropy',
    observedValue: 1,
    observedDisplay: 'extraordinarily low (Penrose estimate: 1 part in 10^(10^123))',
    scaleType: 'log',
    tMin: -6,
    tMax: 6,
    tStep: 0.02,
    tCoarseStep: 0.5,
    blurb:
      "The Big Bang began in an almost inconceivably special, low-entropy state -- Roger Penrose calculated the odds against it at about 1 in 10^(10^123).",
    learnMore:
      "Penrose's phase-space argument: of all the ways the early universe's matter and gravitational field could have been arranged, only an absurdly tiny fraction correspond to as smooth and low-entropy a state as the one we actually observe. That special starting point is what gives the universe a thermodynamic arrow of time and a long reservoir of usable free energy for gravity to slowly convert into stars, chemistry, and complexity over billions of years, before everything eventually runs down toward heat death.",
    bands: [
      {
        tMax: -3,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Too smooth to ever start collapsing',
        text: 'Pushed toward a still lower, more perfectly uniform starting state, there is no meaningful density contrast anywhere for gravity to seize on. Without any seed to amplify, structure never begins to form and the cosmos stays a smooth, expanding gas forever.',
      },
      {
        tMax: -1,
        severity: SEVERITY.HOSTILE,
        headline: 'An overlong wait for structure',
        text: "The initial state is even more special than observed, delaying meaningful structure formation for so long that any stars which eventually form arrive well past a universe's worth of usable cosmic history.",
      },
      {
        tMax: -0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'A marginally more ordered start',
        text: 'Starting slightly more ordered than observed shifts the timeline of structure formation somewhat, but stars, galaxies, and planets still emerge in roughly the observed way.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.OBSERVED,
        headline: 'A vast reservoir of usable free energy',
        text: 'The universe begins in the extraordinarily special, low-entropy state actually observed, giving gravity a long, gentle thermodynamic gradient to exploit over billions of years -- exactly the runway that stars, chemistry, and life ride on.',
      },
      {
        tMax: 1,
        severity: SEVERITY.MARGINAL,
        headline: 'A shortened thermodynamic runway',
        text: 'Starting measurably closer to equilibrium leaves less usable free energy for stars and chemistry to draw on, shortening -- but not eliminating -- the window for structure and complexity to develop.',
      },
      {
        tMax: 3,
        severity: SEVERITY.HOSTILE,
        headline: 'Approaching equilibrium from the start',
        text: 'The initial state is already close to thermal equilibrium. Only a thin sliver of usable free energy remains to drive stars and chemical activity, drastically compressing any window for complexity to emerge.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Heat death from the very first instant',
        text: 'The universe begins already near maximum entropy -- a smooth, dark, near-equilibrium haze of radiation with essentially no thermodynamic arrow of time left to drive stars, chemistry, or any form of complexity.',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'hoyle-resonance',
    name: 'Carbon-12 Hoyle Resonance',
    symbol: 'E(Hoyle) âˆ’ E(3Î±)',
    unit: 'MeV above the 3-alpha threshold',
    observedValue: 0.379,
    scaleType: 'log',
    tMin: -1,
    tMax: 1,
    tStep: 0.005,
    tCoarseStep: 0.1,
    blurb:
      'Fred Hoyle predicted an excited state of carbon-12, tuned to just the right energy, without which stars could not produce carbon at any meaningful rate.',
    learnMore:
      "Three helium nuclei must combine (the 'triple-alpha process') to make carbon-12, but a direct three-body collision is exceedingly rare. Hoyle realized carbon production only works because carbon-12 has an excited resonance state sitting at almost exactly the combined energy of three alpha particles plus the thermal energy available in a red giant's core -- his famous 1953 prediction, later confirmed in the lab. Shift that resonance even a few hundred keV in either direction and the reaction rate changes by orders of magnitude, either burning through carbon into oxygen too fast to leave any behind, or never producing meaningful carbon at all.",
    bands: [
      {
        tMax: -0.65,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Helium burns straight through carbon into oxygen',
        text: 'With the resonance sitting almost exactly at the reaction threshold, triple-alpha fusion runs essentially unimpeded at even modest core temperatures. Helium converts through carbon and onward into oxygen and heavier elements so efficiently that almost none is left over.',
      },
      {
        tMax: -0.3,
        severity: SEVERITY.HOSTILE,
        headline: 'Carbon barely outruns its own destruction',
        text: 'The resonance sits closer to threshold than observed, so carbon is produced but converted onward into oxygen unusually fast, leaving stellar interiors with far less leftover carbon than the observed universe.',
      },
      {
        tMax: -0.07,
        severity: SEVERITY.MARGINAL,
        headline: 'A shifted carbon-to-oxygen balance',
        text: 'Triple-alpha fusion runs somewhat faster than observed, tilting the carbon-to-oxygen ratio produced in stars, without eliminating either element.',
      },
      {
        tMax: 0.07,
        severity: SEVERITY.OBSERVED,
        headline: "Hoyle's prediction, exactly confirmed",
        text: 'The resonance sits at just the right energy above the reaction threshold to make the triple-alpha process efficient at red-giant core temperatures -- producing abundant carbon while still leaving plenty behind for oxygen, planets, and biochemistry.',
      },
      {
        tMax: 0.3,
        severity: SEVERITY.MARGINAL,
        headline: 'Carbon production runs cooler',
        text: 'The resonance sits a bit further from the reaction threshold than observed. Triple-alpha fusion becomes somewhat less efficient, producing measurably less carbon per star than observed.',
      },
      {
        tMax: 0.65,
        severity: SEVERITY.HOSTILE,
        headline: 'The resonance is nearly out of thermal reach',
        text: 'Stellar core temperatures can barely reach this resonance. Triple-alpha fusion becomes rare, and stars synthesize only a trickle of carbon compared to the observed universe.',
      },
      {
        tMax: Infinity,
        severity: SEVERITY.CATASTROPHIC,
        headline: 'Carbon never forms anywhere',
        text: 'The resonance sits so far above the energy available in any stellar core that the triple-alpha process essentially never proceeds. Carbon -- and everything heavier that depends on it as a nucleosynthesis stepping stone -- never forms anywhere in the universe.',
      },
    ],
  },
];

export function findConstant(id) {
  return CONSTANTS.find((c) => c.id === id) ?? null;
}
