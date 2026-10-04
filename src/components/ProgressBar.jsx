import { useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion, ScrollTrigger } from "../lib/gsap.js";

export default function ProgressBar() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const bar = ref.current;
    if (!bar) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      const apply = reducedMotion()
        ? (progress) => gsap.set(bar, { scaleX: progress })
        : gsap.quickTo(bar, "scaleX", { duration: 0.35, ease: "power2.out" });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => apply(self.progress),
      });
    }, bar);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-saffron"
    />
  );
}
