import { pedagogy, scenes, stages } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Container, SectionHeading } from "./ui.jsx";

export default function Academics() {
  return (
    <section id="academics" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading index="03" eyebrow="Academics" title="CBSE, taught so students take part.">
              Curriculum at TIS is built for a co-educational residential school: inclusive rooms, and teaching that is constructive, collaborative, and inquiry-based.
            </SectionHeading>
          </Reveal>
          <div className="mt-8 grid gap-3">
            {stages.map((stage, index) => (
              <Reveal key={stage.title} delay={0.06 * index}>
                <article className="theme-surface rounded-2xl border border-line bg-card p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-saffron">{stage.years}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight text-ink">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{stage.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <img
              src={scenes.classroom.src}
              alt={scenes.classroom.alt}
              width="1600"
              height="1000"
              loading="lazy"
              decoding="async"
              className="mb-4 h-72 w-full rounded-3xl object-cover"
            />
          </Reveal>
          <ol className="grid gap-4 sm:grid-cols-2">
            {pedagogy.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={0.05 * index} className="h-full">
                  <article className="theme-surface flex h-full flex-col rounded-3xl border border-line bg-paper-2 p-5">
                    <span className="font-display text-sm text-saffron">0{index + 1}</span>
                    <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
