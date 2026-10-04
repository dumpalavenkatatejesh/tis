import { useLayoutEffect, useRef, useState } from "react";
import { houses } from "../data/content.js";
import { gsap, reducedMotion } from "../lib/gsap.js";
import Reveal from "./Reveal.jsx";
import { Container, SectionHeading } from "./ui.jsx";

export default function Houses() {
  const [active, setActive] = useState(0);
  const house = houses[active];
  const copyRef = useRef(null);

  useLayoutEffect(() => {
    const el = copyRef.current;
    if (!el || reducedMotion()) return undefined;
    const tween = gsap.fromTo(
      el,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
    );
    return () => tween.kill();
  }, [house]);

  return (
    <section id="houses" className="scroll-mt-24 border-t border-line py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading index="05" eyebrow="Houses" title="All for one, and one for all.">
              Seven houses carry the school: Olympian, Spartan, Trojan, Titan, Starks, Valkyrie, and Athena. Captains lead them as mentors and as mates — friendly, and impartial.
            </SectionHeading>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <div className="theme-surface rounded-[2rem] border border-line bg-card p-6 md:p-8">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Houses">
                {houses.map((name, index) => {
                  const selected = index === active;
                  return (
                    <button
                      key={name}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActive(index)}
                      className={
                        selected
                          ? "rounded-full bg-ember px-3.5 py-2 text-sm font-semibold text-on-ember"
                          : "rounded-full border border-line px-3.5 py-2 text-sm font-semibold text-ink hover:bg-paper-2"
                      }
                    >
                      {name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 min-h-40" aria-live="polite">
                <div ref={copyRef}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
                    House {String(active + 1).padStart(2, "0")} of 07
                  </p>
                  <h3 className="mt-2 font-display text-5xl tracking-tight text-ink md:text-7xl">{house}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                    Captains of {house} House guide their charges and sort what needs sorting — mentors as well as mates.
                    The seven houses act as Tula’s ambassadors wherever they represent the school.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
