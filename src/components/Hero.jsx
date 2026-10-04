import { heroFacts, school } from "../data/content.js";
import CampusView from "./CampusView.jsx";
import Reveal from "./Reveal.jsx";
import { Button, Container } from "./ui.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative min-h-[92svh] overflow-hidden">
        <CampusView />
        <div className="absolute inset-0 bg-gradient-to-r from-scrim/90 via-scrim/62 to-scrim/25" />
        <Container className="relative flex min-h-[92svh] flex-col justify-end pt-28 pb-20 md:pt-32 md:pb-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron-bright">
              Dehradun · Boarding and day · CBSE
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.95] tracking-[-0.035em] text-white">
              Knowledge is
              <br />
              the supreme
              <br />
              <span className="italic text-saffron-bright">wealth.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {school.name} is a co-educational CBSE boarding and day school in Dehradun.
              Academic excellence, holistic development, and students prepared to be global leaders —
              on a 22-acre campus in the Himalayan foothills.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#enquire">Begin an enquiry</Button>
              <Button href="#campus" variant="photo">Walk the campus</Button>
            </div>
            <p className="mt-5 text-sm text-white/75">
              Admissions helpline{" "}
              <a href={school.phoneHref} className="font-semibold text-white underline decoration-saffron-bright underline-offset-4">
                {school.phoneDisplay}
              </a>
            </p>
          </Reveal>
          <p className="mt-8 max-w-sm text-sm text-white">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-saffron-bright">Campus</span>
            <span className="mt-1 block font-display text-2xl tracking-tight">Dhoolkot, Selaqui</span>
            <span className="text-white/75">Chakrata Road, Dehradun</span>
          </p>
        </Container>
      </div>

      <Container className="relative z-10 -mt-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-lg sm:grid-cols-4">
          {heroFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={0.05 * index} className="bg-card">
              <div className="px-5 py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{fact.label}</dt>
                <dd className="mt-2 font-display text-4xl tracking-tight text-ink">{fact.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
