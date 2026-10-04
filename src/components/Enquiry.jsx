import { useEffect, useRef, useState } from "react";
import { grades, school, stays } from "../data/content.js";
import { cn } from "../lib/cn.js";
import { Button } from "./ui.jsx";

const empty = { name: "", phone: "", email: "", grade: "", stay: "", note: "" };

function validPhone(value) {
  const digits = value.replace(/\D/g, "");
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(local);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter the parent or guardian’s name.";
  if (!validPhone(values.phone)) errors.phone = "Enter a 10-digit Indian mobile number.";
  if (!validEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!grades.includes(values.grade)) errors.grade = "Choose a class.";
  if (!stays.includes(values.stay)) errors.stay = "Choose boarding or day.";
  if (values.note.length > 400) errors.note = "Keep the note under 400 characters.";
  return errors;
}

function mailtoFor(values) {
  const subject = encodeURIComponent("Admission enquiry — Tula’s International School");
  const body = encodeURIComponent(
    [
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Class: ${values.grade}`,
      `Boarding or day: ${values.stay}`,
      values.note.trim() ? `Note: ${values.note.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return `mailto:${school.email}?subject=${subject}&body=${body}`;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const fieldClass =
  "w-full rounded-xl border bg-paper px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-saffron";

export default function Enquiry() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);
  const panel = useRef(null);

  useEffect(() => {
    if (done) panel.current?.focus();
  }, [done]);

  const update = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = ["name", "phone", "email", "grade", "stay", "note"].find((key) => next[key]);
      document.getElementById(first)?.focus();
      return;
    }
    setDone({ ...values, href: mailtoFor(values) });
  };

  if (done) {
    return (
      <div ref={panel} className="theme-surface rounded-[2rem] border border-line bg-card p-6 md:p-8" tabIndex={-1}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">Enquiry ready</p>
        <h3 className="mt-3 font-display text-4xl tracking-tight text-ink">Nothing was sent automatically.</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          This page is a front-end demo, so the note stays in your browser. Email admissions when you are ready, or call the helpline. Official registration still runs through the school.
        </p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted">For</dt>
            <dd className="font-semibold text-ink">{done.name}</dd>
          </div>
          <div>
            <dt className="text-muted">Class {done.grade}</dt>
            <dd className="font-semibold text-ink">{done.stay}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={done.href}>Email admissions</Button>
          <Button href={school.phoneHref} variant="ghost">
            Call {school.phoneDisplay}
          </Button>
        </div>
        <button
          type="button"
          onClick={() => {
            setDone(null);
            setValues(empty);
          }}
          className="mt-6 text-sm font-semibold text-ink underline decoration-saffron underline-offset-4"
        >
          Start another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="theme-surface rounded-[2rem] border border-line bg-card p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Parent or guardian" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClass, errors.name ? "border-danger" : "border-line")}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="98XXXXXXXX"
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(fieldClass, errors.phone ? "border-danger" : "border-line")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldClass, errors.email ? "border-danger" : "border-line")}
          />
        </Field>
        <Field id="grade" label="Class seeking admission" error={errors.grade}>
          <div className="relative">
            <select
              id="grade"
              name="grade"
              value={values.grade}
              onChange={update("grade")}
              aria-invalid={Boolean(errors.grade)}
              aria-describedby={errors.grade ? "grade-error" : undefined}
              className={cn(fieldClass, "appearance-none pr-10", errors.grade ? "border-danger" : "border-line")}
            >
              <option value="">Select a class</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  Class {grade}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted" aria-hidden="true">
              ▾
            </span>
          </div>
        </Field>
        <fieldset className="sm:col-span-2">
          <legend className="mb-1.5 text-sm font-semibold text-ink">Boarding or day</legend>
          <div className="grid grid-cols-2 gap-2">
            {stays.map((stay) => {
              const selected = values.stay === stay;
              return (
                <label
                  key={stay}
                  data-cursor="grow"
                  className={cn(
                    "rounded-xl border px-3 py-3 text-center text-sm font-semibold focus-within:border-saffron",
                    selected ? "border-ember bg-ember text-on-ember" : "border-line text-ink",
                  )}
                >
                  <input
                    type="radio"
                    name="stay"
                    value={stay}
                    checked={selected}
                    onChange={update("stay")}
                    className="sr-only"
                  />
                  {stay}
                </label>
              );
            })}
          </div>
          {errors.stay ? (
            <p id="stay-error" role="alert" className="mt-1.5 text-sm text-danger">
              {errors.stay}
            </p>
          ) : null}
        </fieldset>
        <div className="sm:col-span-2">
          <Field id="note" label="Note, optional" error={errors.note}>
            <textarea
              id="note"
              name="note"
              rows={4}
              maxLength={400}
              value={values.note}
              onChange={update("note")}
              aria-invalid={Boolean(errors.note)}
              aria-describedby={errors.note ? "note-error" : undefined}
              className={cn(fieldClass, "resize-y", errors.note ? "border-danger" : "border-line")}
            />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit">Prepare enquiry</Button>
        <p className="text-sm text-muted">Helpline {school.phoneDisplay}</p>
      </div>
    </form>
  );
}
