import { ribbon } from "../data/content.js";
import { cn } from "../lib/cn.js";

export default function Ribbon() {
  return (
    <section aria-label="School at a glance" className="border-y border-line bg-paper-2">
      <p className="sr-only">{ribbon.join(". ")}</p>
      <div className="marquee py-4" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className={cn("flex shrink-0 items-center", copy === 1 && "motion-reduce:hidden")}>
              {ribbon.map((item) => (
                <li key={`${copy}-${item}`} className="flex items-center pr-8 text-sm font-semibold tracking-wide text-ink">
                  {item}
                  <span className="ml-8 inline-block h-1.5 w-1.5 rounded-full bg-saffron" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
