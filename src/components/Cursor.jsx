import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsap.js";

const HOT_SELECTOR = "a, button, summary, [data-cursor='grow']";
const FIELD_SELECTOR = "input, textarea, select";

function mouseAvailable() {
  return window.matchMedia("(any-pointer: fine), (pointer: fine)").matches;
}

export default function Cursor() {
  const [on, setOn] = useState(mouseAvailable);
  const [hot, setHot] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const api = useRef(null);
  const hotRef = useRef(false);
  const hiddenRef = useRef(true);

  useEffect(() => {
    const media = window.matchMedia("(any-pointer: fine), (pointer: fine)");
    const sync = () => setOn(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (!on) return undefined;
    const dot = dotRef.current;
    const ring = ringRef.current;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100, autoAlpha: 0 });

    api.current = {
      dotX: gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" }),
      dotY: gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" }),
      ringX: gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" }),
      ringY: gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" }),
      ringScale: gsap.quickTo(ring, "scale", { duration: 0.35, ease: "power3.out" }),
      dotScale: gsap.quickTo(dot, "scale", { duration: 0.25, ease: "power3.out" }),
      show: () => gsap.to([dot, ring], { autoAlpha: 1, duration: 0.15, overwrite: "auto" }),
      hide: () => gsap.to([dot, ring], { autoAlpha: 0, duration: 0.12, overwrite: "auto" }),
    };

    return () => {
      api.current = null;
      gsap.killTweensOf([dot, ring]);
    };
  }, [on]);

  useEffect(() => {
    const onMove = (event) => {
      if (event.pointerType === "touch") return;
      setOn(true);

      const mover = api.current;
      if (!mover) return;

      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(FIELD_SELECTOR)) {
        if (!hiddenRef.current) {
          hiddenRef.current = true;
          mover.hide();
        }
        return;
      }

      mover.dotX(event.clientX);
      mover.dotY(event.clientY);
      mover.ringX(event.clientX);
      mover.ringY(event.clientY);

      if (hiddenRef.current) {
        hiddenRef.current = false;
        mover.show();
      }

      const nextHot = Boolean(target?.closest(HOT_SELECTOR));
      if (hotRef.current !== nextHot) {
        hotRef.current = nextHot;
        setHot(nextHot);
        mover.ringScale(nextHot ? 2.25 : 1);
        mover.dotScale(nextHot ? 0.35 : 1);
      }
    };

    const onLeave = () => {
      hiddenRef.current = true;
      api.current?.hide();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!on) return undefined;
    document.documentElement.dataset.cursor = "on";
    return () => {
      delete document.documentElement.dataset.cursor;
    };
  }, [on]);

  if (!on) return null;

  return (
    <>
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
      <div ref={ringRef} aria-hidden="true" className={hot ? "cursor-ring is-hot" : "cursor-ring"} />
    </>
  );
}
