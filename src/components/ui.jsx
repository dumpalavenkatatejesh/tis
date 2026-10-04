import { cn } from "../lib/cn.js";

export function Container({ className, children }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>{children}</div>;
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({ href, children, variant = "primary", className, ...props }) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-[transform,background-color,color,border-color] duration-300 hover:-translate-y-0.5",
    variant === "primary" && "bg-ember text-on-ember",
    variant === "ghost" && "border border-line bg-transparent text-ink hover:bg-paper-2",
    variant === "photo" && "border border-white/40 bg-white/10 text-white hover:bg-white/20",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {variant === "primary" ? <Arrow /> : null}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
      {variant === "primary" ? <Arrow /> : null}
    </button>
  );
}

export function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
        {index} — {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.03em] text-ink">
        {title}
      </h2>
      {children ? <div className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">{children}</div> : null}
    </div>
  );
}
