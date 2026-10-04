import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { nav, school } from "../data/content.js";
import { cn } from "../lib/cn.js";
import { gsap, reducedMotion } from "../lib/gsap.js";
import ThemeToggle from "./ThemeToggle.jsx";
import { Button } from "./ui.jsx";

function Crest({ className }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="18.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 28 20 9.5 33 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M13 28 20 17.5 27 28" fill="var(--saffron)" />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 text-ink">
      <Crest className="h-10 w-10" />
      <span className="leading-none">
        <span className="block font-display text-lg tracking-tight">{school.short}</span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          Dehradun
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const menuButton = useRef(null);
  const firstLink = useRef(null);
  const panelRef = useRef(null);
  const openRef = useRef(open);
  const [mounted, setMounted] = useState(false);
  openRef.current = open;
  if (open && !mounted) setMounted(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > lastY.current && y > 90);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    firstLink.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!mounted || !panel) return undefined;
    if (reducedMotion()) {
      if (!open) setMounted(false);
      return undefined;
    }

    const ctx = gsap.context(() => {
      const links = panel.querySelectorAll("[data-menu-link]");
      if (open) {
        const timeline = gsap.timeline();
        timeline.fromTo(panel, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.22, ease: "power2.out" });
        timeline.from(links, { y: 14, autoAlpha: 0, stagger: 0.05, duration: 0.4, ease: "power3.out" }, 0.04);
        return;
      }

      gsap.to(panel, {
        autoAlpha: 0,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          if (!openRef.current) setMounted(false);
        },
      });
    }, panel);

    return () => ctx.revert();
  }, [open, mounted]);

  const closeFromLink = () => setOpen(false);

  return (
    <header
      className={cn(
        "theme-surface fixed inset-x-0 z-50 border-b transition-[top,background-color,border-color] duration-300",
        hidden && !open ? "-top-24" : "top-0",
        scrolled || open ? "nav-solid border-line" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-muted transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-saffron after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="#enquire">Apply</Button>
          </div>
          <button
            ref={menuButton}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5">
              <span className={cn("absolute left-0 h-px w-5 bg-ink transition", open ? "top-1.5 rotate-45" : "top-0")} />
              <span className={cn("absolute left-0 h-px w-5 bg-ink transition", open ? "top-1.5 -rotate-45" : "top-3")} />
            </span>
          </button>
        </div>
      </div>

      {mounted ? (
        <nav
          ref={panelRef}
          id="mobile-nav"
          aria-label="Mobile"
          className="theme-surface fixed inset-x-0 top-16 bottom-0 z-40 bg-paper px-5 pt-8 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLink : undefined}
                href={item.href}
                data-menu-link
                onClick={closeFromLink}
                className="border-b border-line py-3 font-display text-4xl tracking-tight text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button href="#enquire" onClick={closeFromLink} className="mt-8 w-full" data-menu-link>
            Begin an enquiry
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
