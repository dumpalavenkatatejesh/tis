import { useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion } from "../lib/gsap.js";
import { useTheme } from "../context/ThemeContext.jsx";

function Sun() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" fill="none">
      <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 1.5v1.8M8 12.7v1.8M1.5 8h1.8M12.7 8h1.8M3.2 3.2l1.3 1.3M11.5 11.5l1.3 1.3M12.8 3.2l-1.3 1.3M4.5 11.5l-1.3 1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Moon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" fill="none">
      <path d="M10.2 2.2A5.6 5.6 0 1 0 13.8 9 4.3 4.3 0 0 1 10.2 2.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  const knob = useRef(null);
  const icon = useRef(null);
  const first = useRef(true);

  useLayoutEffect(() => {
    const reduce = reducedMotion();
    gsap.to(knob.current, {
      x: dark ? 28 : 0,
      duration: reduce ? 0 : 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });

    if (first.current) {
      first.current = false;
      return;
    }
    if (reduce || !icon.current) return;
    gsap.fromTo(
      icon.current,
      { rotate: -28, scale: 0.6, autoAlpha: 0 },
      { rotate: 0, scale: 1, autoAlpha: 1, duration: 0.22, ease: "power2.out" },
    );
  }, [dark]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className="relative h-9 w-16 shrink-0 rounded-full border border-line bg-paper-2"
    >
      <span
        ref={knob}
        className="absolute top-1 left-1 flex h-7 w-7 items-center justify-center rounded-full bg-ember text-on-ember"
      >
        <span key={theme} ref={icon} className="flex">
          {dark ? <Moon /> : <Sun />}
        </span>
      </span>
    </button>
  );
}
