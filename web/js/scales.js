// ─── Powers of Ten scale data ───────────────────────────────────
// Each entry: power, title, description, CSS gradient fallback, image filename
// Images go in /images/{filename} — replace gradients with AI-generated images
// Filename format: 10{+/-}{NN}-{name}.jpg

export const scales = [
    {
        power: -15,
        title: "Quarks",
        desc: "The fundamental building blocks of matter. Three quarks are bound together by gluons to form protons and neutrons. At this scale, the strong nuclear force dominates.",
        bg: "radial-gradient(circle, #ff006620, #1a0020 40%, #000)",
        image: "10-15-quarks.jpg"
    },
    {
        power: -14,
        title: "Atomic Nucleus",
        desc: "Protons and neutrons packed into a dense nucleus just femtometers across — 100,000 times smaller than the atom itself. Nearly all of an atom's mass is concentrated here.",
        bg: "radial-gradient(circle, #ff4400 5%, #660000 20%, #1a0000 50%, #000)",
        image: "10-14-nucleus.jpg"
    },
    {
        power: -12,
        title: "Inner Atom",
        desc: "The space between the nucleus and the electron cloud. This region is almost entirely empty — an atom is mostly nothing.",
        bg: "radial-gradient(circle, #220044 10%, #0a0020 40%, #000)",
        image: "10-12-inner-atom.jpg"
    },
    {
        power: -10,
        title: "The Atom",
        desc: "One angstrom — the scale of a single atom. Electron probability clouds form the outer boundary. Everything you see and touch is built from arrangements of these.",
        bg: "radial-gradient(circle, #0044ff20 10%, #002266 30%, #000a1a 60%, #000)",
        image: "10-10-atom.jpg"
    },
    {
        power: -9,
        title: "Molecules",
        desc: "Atoms bonded into molecules. The DNA double helix is about 2 nanometers wide. Water, proteins, and the chemistry of life operate at this scale.",
        bg: "radial-gradient(circle at 40% 50%, #004466 10%, #002233 40%, #000a11 70%, #000)",
        image: "10-09-molecules.jpg"
    },
    {
        power: -8,
        title: "Viruses",
        desc: "A virus — neither alive nor dead. Just a shell of protein around a strand of genetic code. COVID-19, influenza, HIV — all operate at tens of nanometers.",
        bg: "radial-gradient(circle, #336633 10%, #1a3320 35%, #0a1a0a 60%, #000)",
        image: "10-08-virus.jpg"
    },
    {
        power: -7,
        title: "Wavelength of Light",
        desc: "Visible light has wavelengths between 380 and 700 nanometers. Below this scale, optical microscopes can no longer resolve detail.",
        bg: "linear-gradient(135deg, #ff000030, #ff880030, #ffff0030, #00ff0030, #0000ff30, #8800ff30), #000",
        image: "10-07-wavelength.jpg"
    },
    {
        power: -6,
        title: "Bacteria",
        desc: "A single bacterium, one micrometer across. Your body hosts trillions of them. They were the dominant life form on Earth for two billion years.",
        bg: "radial-gradient(ellipse at 45% 50%, #2a4a2a 8%, #0a2a0a 30%, #001100 60%, #000)",
        image: "10-06-bacteria.jpg"
    },
    {
        power: -5,
        title: "Living Cells",
        desc: "A human red blood cell is about 8 micrometers across. Inside: organelles, mitochondria, the entire machinery of life — a city in miniature.",
        bg: "radial-gradient(circle at 50% 45%, #4a1a2a 10%, #2a0a1a 35%, #100008 60%, #000)",
        image: "10-05-cell.jpg"
    },
    {
        power: -4,
        title: "Hair & Sand",
        desc: "A human hair is about 70 micrometers thick. A grain of fine sand, 100 micrometers. The threshold of what the naked eye can just barely see.",
        bg: "radial-gradient(circle, #8a7a5a 5%, #4a3a2a 25%, #1a1008 55%, #000)",
        image: "10-04-hair-sand.jpg"
    },
    {
        power: -3,
        title: "Millimeter World",
        desc: "The head of a pin. A grain of salt. The period at the end of a sentence. The smallest features your fingers can feel.",
        bg: "radial-gradient(circle at 48% 48%, #aaa 2%, #666 10%, #222 40%, #000)",
        image: "10-03-millimeter.jpg"
    },
    {
        power: -2,
        title: "A Fingertip",
        desc: "One centimeter — the width of a fingertip. You can see the whorls of a fingerprint. At this scale, the human body is a landscape.",
        bg: "radial-gradient(circle, #c4956a 15%, #8a6040 35%, #3a2010 60%, #000)",
        image: "10-02-fingertip.jpg"
    },
    {
        power: -1,
        title: "A Human Hand",
        desc: "Ten centimeters — the span of a hand. The scale at which we interact with the world: grasping, writing, building, touching.",
        bg: "radial-gradient(circle at 50% 55%, #c4956a 20%, #7a5535 40%, #2a1a08 65%, #000)",
        image: "10-01-hand.jpg"
    },
    {
        power: 0,
        title: "A Person",
        desc: "One meter. A human being. You are here — the measure of all things. From this scale, we journey outward to the edge of the observable universe.",
        bg: "radial-gradient(circle at 50% 50%, #3a5a3a 20%, #1a3a2a 45%, #0a1a0a 70%, #000)",
        image: "10+00-person.jpg"
    },
    {
        power: 1,
        title: "A Picnic in the Park",
        desc: "Ten meters. A couple on a blanket in the park. Trees, grass, the warmth of an autumn afternoon in Chicago.",
        bg: "radial-gradient(circle at 50% 60%, #3a6a2a 30%, #2a4a1a 50%, #1a2a0a 70%, #000)",
        image: "10+01-picnic.jpg"
    },
    {
        power: 2,
        title: "A City Block",
        desc: "One hundred meters. Roads, buildings, parked cars. The scale of daily life — walking to the store, crossing the street, the view from a rooftop.",
        bg: "linear-gradient(180deg, #4a6a8a 30%, #3a4a3a 50%, #2a3a2a 70%, #1a1a1a)",
        image: "10+02-city-block.jpg"
    },
    {
        power: 3,
        title: "A Neighborhood",
        desc: "One kilometer. The grid of streets becomes visible. The lakeshore, the harbor, the highway — the skeleton of a city emerges.",
        bg: "linear-gradient(180deg, #6688aa 25%, #4a6a4a 55%, #2a3a2a 80%, #111)",
        image: "10+03-neighborhood.jpg"
    },
    {
        power: 4,
        title: "The City",
        desc: "Ten kilometers. An entire city — its downtown core, suburbs, and the surrounding countryside. The footprint of a million lives.",
        bg: "linear-gradient(180deg, #5577aa 20%, #446644 50%, #223322 75%, #0a0a0a)",
        image: "10+04-city.jpg"
    },
    {
        power: 5,
        title: "A Region",
        desc: "One hundred kilometers. Lake Michigan's shoreline curves away. State boundaries, mountain ranges, river systems — geography at the regional scale.",
        bg: "linear-gradient(180deg, #334488 15%, #225533 45%, #113322 70%, #050505)",
        image: "10+05-region.jpg"
    },
    {
        power: 6,
        title: "A Continent",
        desc: "One thousand kilometers. The Great Lakes, the curve of the coastline. At this scale, the Earth begins to look like a planet, not a place.",
        bg: "radial-gradient(circle at 45% 55%, #224488 25%, #112244 50%, #0a1122 75%, #000)",
        image: "10+06-continent.jpg"
    },
    {
        power: 7,
        title: "Earth from Space",
        desc: "Ten thousand kilometers — the diameter of the Earth. The blue marble. Oceans, continents, weather systems. Home to eight billion people.",
        bg: "radial-gradient(circle, #2255aa 12%, #113366 25%, #0a1a33 45%, #000)",
        image: "10+07-earth.jpg"
    },
    {
        power: 8,
        title: "Earth–Moon System",
        desc: "One hundred thousand kilometers. The Moon orbits at 384,000 km. This is the farthest any human has traveled. Everything else is robotic.",
        bg: "radial-gradient(circle at 40% 50%, #1133660a, #000 30%), radial-gradient(circle at 70% 45%, #3333 5%, #0000 10%), #000",
        image: "10+08-earth-moon.jpg"
    },
    {
        power: 10,
        title: "Inner Solar System",
        desc: "Ten billion meters. The orbits of Mercury, Venus, Earth, and Mars — rocky worlds circling an ordinary yellow star.",
        bg: "radial-gradient(circle at 50% 50%, #ffaa00 1%, #442200 4%, #0a0500 15%, #000)",
        image: "10+10-inner-solar.jpg"
    },
    {
        power: 12,
        title: "The Solar System",
        desc: "One trillion meters. Jupiter, Saturn, Uranus, Neptune — gas giants in the cold outer reaches. The Sun is now just a bright star.",
        bg: "radial-gradient(circle, #ffcc00 0.3%, #221100 2%, #050200 8%, #000)",
        image: "10+12-solar-system.jpg"
    },
    {
        power: 14,
        title: "The Oort Cloud",
        desc: "One hundred trillion meters — about one light-year. The hypothetical Oort Cloud: a shell of icy debris marking the gravitational edge of our solar system.",
        bg: "radial-gradient(circle, #111122 20%, #060611 50%, #000)",
        image: "10+14-oort-cloud.jpg"
    },
    {
        power: 16,
        title: "Nearby Stars",
        desc: "One light-year. Alpha Centauri, our nearest stellar neighbor, is 4.37 light-years away. The distances between stars are staggering.",
        bg: "radial-gradient(circle at 30% 40%, #fff 0.1%, #0000 0.5%), radial-gradient(circle at 65% 55%, #fff 0.08%, #0000 0.4%), #020208",
        image: "10+16-nearby-stars.jpg"
    },
    {
        power: 18,
        title: "Stellar Neighborhood",
        desc: "One hundred light-years. A few hundred stars. Familiar constellations dissolve — they were only patterns from our one vantage point.",
        bg: "radial-gradient(circle, #0a0a1a 30%, #050510 60%, #000005)",
        image: "10+18-stellar-neighborhood.jpg"
    },
    {
        power: 20,
        title: "The Milky Way",
        desc: "Ten thousand light-years. Our galaxy — a barred spiral of 200–400 billion stars, 100,000 light-years across. The Sun is two-thirds of the way out from center.",
        bg: "linear-gradient(30deg, #0000, #1a1a2a20 40%, #2a2a4a20 50%, #1a1a2a20 60%, #0000), radial-gradient(ellipse at 50% 50%, #1a1a2a, #0a0a12 50%, #000)",
        image: "10+20-milky-way.jpg"
    },
    {
        power: 22,
        title: "The Local Group",
        desc: "One million light-years. The Milky Way, Andromeda, and about 80 smaller galaxies bound together by gravity. Andromeda is on a collision course — in 4.5 billion years.",
        bg: "radial-gradient(circle at 40% 45%, #1115 8%, #0000 20%), radial-gradient(circle at 62% 52%, #1115 5%, #0000 15%), #000004",
        image: "10+22-local-group.jpg"
    },
    {
        power: 24,
        title: "Galaxy Supercluster",
        desc: "One hundred million light-years. Superclusters — galaxies cluster into filaments and walls separated by immense voids. The cosmic web.",
        bg: "radial-gradient(circle at 35% 30%, #0a0a2a10 15%, #0000), radial-gradient(circle at 60% 65%, #0a0a2a10 10%, #0000), #000003",
        image: "10+24-supercluster.jpg"
    },
    {
        power: 26,
        title: "The Observable Universe",
        desc: "The cosmic horizon — 93 billion light-years across. Every photon that has had time to reach us since the Big Bang, 13.8 billion years ago. Beyond this, we cannot see.",
        bg: "radial-gradient(circle, #0a0a15 30%, #050508 60%, #000002)",
        image: "10+26-observable-universe.jpg"
    }
];
