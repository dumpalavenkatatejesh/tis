# Tula’s International School — homepage

A responsive, animated homepage for [Tula’s International School](https://tis.edu.in/) (TIS), Dehradun. It keeps the school’s name, motto, colours, and published facts, and presents them as a single scrolling admissions page.

This is an independent redesign for review. The official website remains [tis.edu.in](https://tis.edu.in/).

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build    # production bundle in dist/
npm run preview  # serve that bundle locally
```

## Deploy

The build is a static `dist/` folder.

**Vercel.** Import the repository. Framework preset: Vite. Output directory: `dist`. No extra config.

**Netlify.** `netlify.toml` already sets the build command and publish folder. Connect the repo, or run `npm run build` and drag `dist/` onto Netlify.

**GitHub Pages.** For a project site (`https://<user>.github.io/<repo>/`), set `base` in `vite.config.js` to `"/<repo>/"`, run `npm run build`, and publish the `dist/` folder. For a user site (`https://<user>.github.io`), leave `base` as `"/"`.

## What the page includes

All four interaction features from the brief:

- **Custom cursor.** GSAP `quickTo` eases a dot and a lagging ring. The ring scales on links and buttons, and steps aside on form fields. Touch devices keep the system cursor.
- **Scroll progress.** A saffron bar at the top tracks reading position. ScrollTrigger reports progress and GSAP eases the bar.
- **Theme switch.** Light and dark, stored in `localStorage`, with the first paint set by a small script in `index.html` so the page does not flash the wrong theme. The knob slide is a GSAP tween.
- **Scroll reveals.** ScrollTrigger plays a short rise as sections and cards enter the viewport. The hero illustration also parallaxes on scroll. Motion is skipped when `prefers-reduced-motion` is set.

The enquiry form validates in the browser and prepares a `mailto:` to `info@tis.edu.in`. It does not submit an application by itself. Real registration is described from the school’s admissions page: Classes IV–IX and XI, from September, fee ₹15,000, forms in by 31 March.

## How the code is organised

```
src/
  main.jsx                  # mounts React and the theme provider
  App.jsx                   # page order only
  index.css                 # tokens, theme, cursor, marquee, illustration
  data/content.js           # copy and facts, separate from layout
  lib/gsap.js               # GSAP and ScrollTrigger, registered once
  context/ThemeContext.jsx  # light/dark state
  components/               # one section or chrome piece per file
```

`data/content.js` is the place to change wording. Components render that data; they do not own the school facts. Animation lives in the components and goes through `src/lib/gsap.js`, so GSAP plugins are registered in one place.

Theme colours are CSS variables on `:root` and `html.dark`. Tailwind utilities point at those variables (`@theme inline`), so `bg-paper` and `text-ink` follow the toggle without a second set of classes.

School colours are orange and green. The palette is saffron and forest on warm paper, with Fraunces for headlines and Manrope for interface text. The hero is a photographic sequence of school life and the foothills, crossfaded with GSAP.

## Sources

Facts and phrasing are taken from public pages on tis.edu.in — home, vision and mission, why choose us, pedagogy, house system, boarding facilities, admissions, and the FAQ — plus the motto “Knowledge is the supreme wealth.” Longer passages are paraphrased. Addresses, phone numbers, grades, dates, and the registration fee are kept as published.
