import { school, steps } from "../data/content.js";
import Enquiry from "./Enquiry.jsx";
import Reveal from "./Reveal.jsx";
import { Container, SectionHeading } from "./ui.jsx";

export default function Admissions() {
  return (
    <section id="admissions" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading index="07" eyebrow="Admissions" title="A clear path to a seat.">
              Registration is open from September for Classes IV–IX and XI. Apply early. Seats can close before the last date.
            </SectionHeading>
          </Reveal>
          <ol className="mt-10 space-y-6">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={0.05 * index}>
                  <article className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="font-display text-2xl text-saffron">0{index + 1}</span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{step.when}</p>
                      <h3 className="mt-1 font-display text-2xl tracking-tight text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            The published process, including the demand draft in favour of Tula’s International School, payable at Dehradun, lives on the{" "}
            <a href={school.admissionsUrl} className="font-semibold text-ink underline decoration-saffron underline-offset-4" target="_blank" rel="noopener noreferrer">
              official admissions page
            </a>
            .
          </p>
        </div>
        <div id="enquire" className="scroll-mt-24 lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="mb-4">
              <h3 className="font-display text-3xl tracking-tight text-ink">Ask for a conversation</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                Share a few details and this page will prepare an email to {school.email}. It does not submit an application by itself.
              </p>
            </div>
            <Enquiry />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
