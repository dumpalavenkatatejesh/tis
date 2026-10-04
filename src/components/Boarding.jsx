import { boarding, scenes } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Container, SectionHeading } from "./ui.jsx";

export default function Boarding() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading index="06" eyebrow="Boarding" title="A house that feels looked after.">
            Safety, support, and a place to work. The boarding houses are home for the residential students, with day scholars on the same campus through the school day.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img
              src={scenes.boarding.src}
              alt={scenes.boarding.alt}
              width="1400"
              height="1600"
              loading="lazy"
              decoding="async"
              className="h-full min-h-80 w-full rounded-3xl object-cover"
            />
          </Reveal>
          <ul className="grid gap-4 lg:col-span-7">
            {boarding.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={0.05 * index} className="h-full">
                  <article className="theme-surface h-full rounded-3xl border border-line bg-paper-2 p-6">
                    <h3 className="font-display text-2xl tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{item.copy}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
