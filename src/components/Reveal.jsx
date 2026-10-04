import { useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion } from "../lib/gsap.js";

export default function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 28,
        autoAlpha: 0,
        duration: 0.75,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
