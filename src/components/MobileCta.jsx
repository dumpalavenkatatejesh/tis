import { useEffect, useState } from "react";
import { Button } from "./ui.jsx";

export default function MobileCta() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const target = document.getElementById("enquire");
    if (!target) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={
        hide
          ? "pointer-events-none fixed inset-x-0 bottom-0 z-40 translate-y-full p-3 opacity-0 transition duration-300 md:hidden"
          : "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper p-3 transition duration-300 md:hidden"
      }
    >
      <Button href="#enquire" className="w-full">
        Enquire for admission
      </Button>
    </div>
  );
}
