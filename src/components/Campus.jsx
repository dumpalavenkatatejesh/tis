import { facilities } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Container, SectionHeading } from "./ui.jsx";

export default function Campus() {
  return (
    <section id="campus" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading index="04" eyebrow="Campus" title="Twenty-two acres, built to be walked.">
            The school cites an Education Today award for infrastructure. Fields, laboratories, boarding houses, and an auditorium sit within a walk of one another.
          </SectionHeading>
        </Reveal>

        <ul className="mt-12 grid gap-4 md:grid-cols-6">
          {facilities.map((item, index) => (
            <li key={item.title} className={index === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"}>
              <Reveal delay={0.04 * index} className="h-full">
                {index === 0 ? (
                  <article className="relative flex h-full min-h-[28rem] flex-col justify-end overflow-hidden rounded-3xl border border-line">
                    <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-scrim/90 via-scrim/45 to-scrim/10" />
                    <div className="relative p-6 text-white md:p-8">
                      <p className="font-display text-sm text-saffron-bright">01</p>
                      <h3 className="mt-4 font-display text-4xl leading-tight tracking-tight">{item.title}</h3>
                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/85 md:text-base">{item.copy}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li key={tag} className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ) : (
                  <article className="theme-surface flex h-full min-h-72 flex-col overflow-hidden rounded-3xl border border-line bg-card">
                    <img src={item.image} alt="" className="h-40 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-display text-sm text-saffron">0{index + 1}</p>
                      <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
                    </div>
                  </article>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
