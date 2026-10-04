import { useLayoutEffect, useRef } from "react";
import { heroSlides } from "../data/content.js";
import { gsap, reducedMotion } from "../lib/gsap.js";

export default function CampusView() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const slides = root.querySelectorAll("[data-slide]");
      const stack = root.querySelector("[data-stack]");
      gsap.set(slides, { autoAlpha: 0 });
      gsap.set(slides[0], { autoAlpha: 1 });

      if (!reducedMotion() && slides.length > 1) {
        const timeline = gsap.timeline({ repeat: -1 });
        slides.forEach((slide, index) => {
          const next = slides[(index + 1) % slides.length];
          timeline.to(slide, { autoAlpha: 0, duration: 1.15, ease: "power2.inOut" }, "+=4.4");
          timeline.to(next, { autoAlpha: 1, duration: 1.15, ease: "power2.inOut" }, "<");
        });
      }

      if (!reducedMotion()) {
        gsap.to(stack, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 bg-[#1b4336]">
      <div data-stack className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            data-slide
            src={slide.src}
            alt={slide.alt}
            width="2000"
            height="1400"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-[112%] w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
