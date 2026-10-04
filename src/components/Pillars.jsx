import { pillars } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Container, SectionHeading } from "./ui.jsx";

export default function Pillars() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading index="02" eyebrow="Why Tula’s" title="Four reasons families stay with the choice.">
            The school’s aim is a student who can learn independently and still feel a duty to other people, and to the country.
          </SectionHeading>
        </Reveal>

        <ol className="mt-12 border-t border-line">
          {pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <Reveal delay={index * 0.05}>
                <article className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-start md:gap-6">
                  <p className="font-display text-3xl text-saffron md:col-span-2">0{index + 1}</p>
                  <h3 className="font-display text-3xl leading-tight tracking-tight text-ink md:col-span-4">{pillar.title}</h3>
                  <p className="text-base leading-relaxed text-muted md:col-span-6">{pillar.copy}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
