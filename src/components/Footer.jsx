import { nav, school } from "../data/content.js";
import { Container } from "./ui.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-line pb-24 pt-16 md:pb-16">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-tight text-ink">{school.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{school.motto}.</p>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            Independent homepage redesign for review. Photographs show school life and the Himalayan setting; they are not the school’s official gallery. The official website is{" "}
            <a href={school.site} className="font-semibold text-ink underline decoration-saffron underline-offset-4" target="_blank" rel="noopener noreferrer">
              tis.edu.in
            </a>
            .
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">Visit</h2>
          <address className="mt-3 text-sm leading-relaxed text-ink not-italic">
            {school.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a href={school.mapUrl} className="mt-3 inline-block text-sm font-semibold text-ink underline decoration-saffron underline-offset-4" target="_blank" rel="noopener noreferrer">
            Open in maps
          </a>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">Admissions</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={school.phoneHref} className="font-semibold text-ink">
                {school.phoneDisplay}
              </a>
            </li>
            {school.landlines.map((line) => (
              <li key={line} className="text-muted">
                {line}
              </li>
            ))}
            <li>
              <a href={`mailto:${school.email}`} className="font-semibold text-ink">
                {school.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">On this page</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ink">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#enquire" className="text-ink">
                Enquire
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
