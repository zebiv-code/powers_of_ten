# Powers of Ten

An interactive recreation of the classic 1977 "Powers of Ten" film by Charles and Ray Eames. Journey from quarks to the observable universe — 41 orders of magnitude — with a single slider.

**[Live Demo](https://zebiv.com/power-of-ten/)**

## Controls

- **Slider** to jump to any scale from 10⁻¹⁵ to 10²⁶ meters
- **Arrow keys** to step one scale at a time
- **Play** to auto-advance through all scales (3.5s per step)
- **Spacebar** to toggle play/pause

## Image Generation

The `images/` directory accepts AI-generated images for each scale. Image filenames are defined in `js/scales.js`. When an image is missing, a CSS gradient fallback is used.

To generate a consistent set, use a prompt template like:

> "Scientific illustration viewed from exactly 10^{N} meters, showing {title}. {desc}. Consistent dark cinematic style, deep space black background for cosmic scales, muted earth tones for terrestrial scales. No text. 16:9 aspect ratio."

## 31 Scales Covered

| Power | Title |
|-------|-------|
| 10⁻¹⁵ | Quarks |
| 10⁻¹⁴ | Atomic Nucleus |
| 10⁻¹² | Inner Atom |
| 10⁻¹⁰ | The Atom |
| 10⁻⁹ | Molecules |
| 10⁻⁸ | Viruses |
| 10⁻⁷ | Wavelength of Light |
| 10⁻⁶ | Bacteria |
| 10⁻⁵ | Living Cells |
| 10⁻⁴ | Hair & Sand |
| 10⁻³ | Millimeter World |
| 10⁻² | A Fingertip |
| 10⁻¹ | A Human Hand |
| 10⁰ | A Person |
| 10¹ | A Picnic in the Park |
| 10² | A City Block |
| 10³ | A Neighborhood |
| 10⁴ | The City |
| 10⁵ | A Region |
| 10⁶ | A Continent |
| 10⁷ | Earth from Space |
| 10⁸ | Earth–Moon System |
| 10¹⁰ | Inner Solar System |
| 10¹² | The Solar System |
| 10¹⁴ | The Oort Cloud |
| 10¹⁶ | Nearby Stars |
| 10¹⁸ | Stellar Neighborhood |
| 10²⁰ | The Milky Way |
| 10²² | The Local Group |
| 10²⁴ | Galaxy Supercluster |
| 10²⁶ | The Observable Universe |

## Tech

- Vanilla HTML/CSS/JavaScript, no build step
- CSS gradient fallbacks for every scale
- Image preloading with graceful fallback
- Smooth crossfade transitions between scales

## License

MIT — see [LICENSE.md](LICENSE.md)
