import { mission, school, vision } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Container, SectionHeading } from "./ui.jsx";

export default function Story() {
  return (
    <section id="story" className="scroll-mt-24 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading index="01" eyebrow="The school" title="Opened to shape a life, not only a syllabus.">
              <p>
                {school.name} opened in {school.established} under Rishabh Educational Trust, founded by Sunil Kumar Jain.
                Dehradun was already a city of schools. This one was set up as a co-educational, vegetarian boarding school
                for academic excellence, holistic development, and students preparing to lead.
              </p>
              <p className="mt-4">
                Equity and engagement sit under that aim: a supportive environment for students of many backgrounds, and a
                hands-on curriculum taught by experienced faculty.
              </p>
            </SectionHeading>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:col-span-7">
          <Reveal delay={0.08}>
            <article className="theme-surface rounded-3xl border border-line bg-card p-6 md:p-8">
              <h3 className="font-display text-2xl tracking-tight text-ink">Vision</h3>
              <p className="mt-3 text-muted">
                To become a centre of excellence, and a leader among educational institutions.
              </p>
              <ul className="mt-5 space-y-3">
                {vision.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.14}>
            <article className="theme-surface rounded-3xl border border-line bg-card p-6 md:p-8">
              <h3 className="font-display text-2xl tracking-tight text-ink">Mission</h3>
              <ul className="mt-5 space-y-3">
                {mission.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>

      <Container className="mt-16 md:mt-24">
        <Reveal>
          <blockquote className="max-w-4xl">
            <p className="font-display text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.15] tracking-[-0.03em] text-ink italic">
              “When you choose a school that chooses you, it becomes a place to belong, grow, and shine.”
            </p>
            <footer className="mt-6 text-sm font-semibold tracking-wide text-muted">{school.name}</footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
