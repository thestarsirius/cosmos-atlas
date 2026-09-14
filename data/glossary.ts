export interface GlossaryTerm {
  term: string;
  simple: string;
  deep: string;
}

export const glossary: GlossaryTerm[] = [
  {
    term: "Black Hole",
    simple: "A region of space where gravity is so strong that nothing, not even light, can escape.",
    deep: "Forms when massive stars collapse, or exists at the centers of most large galaxies as supermassive black holes. Detected indirectly through their effect on nearby matter and light, or directly via imaging the shadow they cast, as with Sagittarius A* and M87*."
  },
  {
    term: "Nebula",
    simple: "A giant cloud of gas and dust in space, often where stars are born or where dying stars scatter their outer layers.",
    deep: "Emission nebulae glow from ionizing radiation of nearby hot stars; reflection nebulae scatter starlight; planetary nebulae are the shed outer layers of dying sun-like stars; supernova remnants are the debris of exploded massive stars."
  },
  {
    term: "Supernova",
    simple: "The explosive death of a star, briefly outshining an entire galaxy.",
    deep: "Occurs either when a massive star's core collapses at the end of its life, or when a white dwarf in a binary system accretes enough mass to trigger runaway nuclear fusion. Supernovae forge and scatter heavy elements throughout the universe."
  },
  {
    term: "Exoplanet",
    simple: "A planet that orbits a star other than the Sun.",
    deep: "Detected mainly via the transit method (a dip in starlight as a planet crosses in front of its star) or radial velocity (a star's slight wobble from a planet's gravitational tug). Thousands have been confirmed since the first detections in the 1990s."
  },
  {
    term: "Light-year",
    simple: "The distance light travels in one year — used to measure vast distances in space.",
    deep: "Equal to about 9.46 trillion kilometers. Because light takes time to travel, looking at distant objects means seeing them as they were in the past, not as they are now."
  },
  {
    term: "Red Giant",
    simple: "A late-life stage of a sun-like star, where it swells enormously and cools, glowing red-orange.",
    deep: "Occurs after a star exhausts the hydrogen fuel in its core; the core contracts and heats while the outer layers expand dramatically. The Sun will become a red giant in several billion years."
  },
  {
    term: "Neutron Star",
    simple: "The extremely dense, collapsed core left behind after a massive star's supernova.",
    deep: "Packs roughly the mass of the Sun into a sphere about 20 km across. Many neutron stars spin rapidly and emit beams of radiation, observed on Earth as pulsars."
  },
  {
    term: "Event Horizon",
    simple: "The boundary around a black hole beyond which nothing can escape its gravity.",
    deep: "Not a physical surface but a mathematical boundary in spacetime, marking where the escape velocity exceeds the speed of light."
  },
  {
    term: "Parallax",
    simple: "The apparent shift in a nearby star's position when viewed from two different points in Earth's orbit.",
    deep: "One of the most reliable methods for measuring distances to nearby stars; the tiny angle of shift is used, via trigonometry, to calculate distance in parsecs."
  },
  {
    term: "Redshift",
    simple: "The stretching of light toward longer, redder wavelengths as its source moves away from us.",
    deep: "Used to measure how fast galaxies are receding and provides key evidence for the expansion of the universe, alongside other independent lines of evidence."
  },
  {
    term: "Habitable Zone",
    simple: "The range of distances from a star where a planet could have liquid water on its surface.",
    deep: "Depends on a star's brightness and temperature. It's a useful first filter for identifying potentially life-friendly exoplanets, though atmosphere and other factors matter too."
  },
  {
    term: "Dark Matter",
    simple: "An invisible form of matter that doesn't emit or absorb light, but whose gravity shapes galaxies.",
    deep: "Inferred from galaxy rotation curves, gravitational lensing, and the large-scale structure of the universe. Its exact nature remains one of the biggest open questions in physics."
  }
];
