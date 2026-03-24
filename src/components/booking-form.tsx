"use client";

import Link from "next/link";
import { startTransition, useState, type FormEvent } from "react";

import { bookingForm, siteConfig } from "@/content/site-content";

type FormState = {
  organisationSize: string;
  sector: string;
  currentState: string[];
  tools: string;
  outcome: string;
};

const defaultState: FormState = {
  organisationSize: "",
  sector: "",
  currentState: [],
  tools: "",
  outcome: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const calendarUrl = process.env.NEXT_PUBLIC_CLARITY_CALL_URL ?? "";

  const summary = [
    `Organisation size: ${form.organisationSize || "Not provided"}`,
    `Sector: ${form.sector || "Not provided"}`,
    `What is happening now: ${
      form.currentState.length > 0 ? form.currentState.join("; ") : "Not provided"
    }`,
    `Tools in use: ${form.tools.trim() || "Not provided"}`,
    `90-day outcome: ${form.outcome.trim() || "Not provided"}`,
  ].join("\n");

  const canSubmit =
    Boolean(form.organisationSize) &&
    Boolean(form.sector) &&
    form.currentState.length > 0 &&
    Boolean(form.outcome.trim());

  function toggleState(value: string) {
    setForm((current) => {
      const currentState = current.currentState.includes(value)
        ? current.currentState.filter((item) => item !== value)
        : [...current.currentState, value];

      return { ...current, currentState };
    });
  }

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(() => setSubmitted(true));
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-line bg-paper/82 p-6 shadow-glow backdrop-blur md:p-8"
      >
        <div className="grid gap-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-3 text-sm text-ink">
              <span className="font-medium">Organisation size</span>
              <select
                value={form.organisationSize}
                onChange={(event) => updateField("organisationSize", event.target.value)}
                className="min-h-12 rounded-[1.25rem] border border-line bg-white/70 px-4 text-base text-ink outline-none transition focus:border-copper"
              >
                <option value="">Select one</option>
                {bookingForm.orgSizes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-3 text-sm text-ink">
              <span className="font-medium">Sector</span>
              <select
                value={form.sector}
                onChange={(event) => updateField("sector", event.target.value)}
                className="min-h-12 rounded-[1.25rem] border border-line bg-white/70 px-4 text-base text-ink outline-none transition focus:border-copper"
              >
                <option value="">Select one</option>
                {bookingForm.sectors.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <fieldset className="grid gap-3">
            <legend className="text-sm font-medium text-ink">What is happening now?</legend>
            <div className="grid gap-3">
              {bookingForm.currentState.map((item) => {
                const checked = form.currentState.includes(item);

                return (
                  <label
                    key={item}
                    className="flex cursor-pointer items-start gap-3 border-b border-line pb-3 text-sm leading-6 text-slate"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleState(item)}
                      className="mt-1 h-4 w-4 rounded border-line text-copper focus:ring-copper"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <label className="grid gap-3 text-sm text-ink">
            <span className="font-medium">Tools currently in use</span>
            <textarea
              rows={4}
              value={form.tools}
              onChange={(event) => updateField("tools", event.target.value)}
              className="rounded-[1.5rem] border border-line bg-white/70 px-4 py-3 text-base leading-7 text-ink outline-none transition focus:border-copper"
              placeholder="For example: ChatGPT, Microsoft Copilot, Claude, Gemini, mixed personal accounts, or internal tools."
            />
          </label>

          <label className="grid gap-3 text-sm text-ink">
            <span className="font-medium">What would success look like in 90 days?</span>
            <textarea
              rows={4}
              value={form.outcome}
              onChange={(event) => updateField("outcome", event.target.value)}
              className="rounded-[1.5rem] border border-line bg-white/70 px-4 py-3 text-base leading-7 text-ink outline-none transition focus:border-copper"
              placeholder="Describe the change you want in plain language."
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-paper transition enabled:hover:bg-ink/90 disabled:cursor-not-allowed disabled:bg-ink/35"
            >
              Continue
            </button>
            <p className="text-sm text-slate">
              {siteConfig.primaryCta.label} follows this short brief.
            </p>
          </div>
        </div>
      </form>

      <aside className="border-t border-line pt-5 lg:pt-0 lg:pl-2">
        {!submitted ? (
          <div className="max-w-sm">
            <p className="page-eyebrow">What happens next</p>
            <p className="mt-4 max-w-xs font-serif text-3xl leading-tight text-ink">
              Two minutes now makes the call sharper later.
            </p>
            <div className="mt-8 border-t border-line">
              {bookingForm.nextSteps.map((item) => (
                <p key={item} className="border-b border-line py-4 text-sm leading-6 text-slate">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-sm">
            <p className="page-eyebrow">Brief ready</p>
            <p className="mt-4 font-serif text-3xl leading-tight text-ink">
              Review it, then continue to scheduling.
            </p>
            <p className="mt-5 whitespace-pre-line text-sm leading-6 text-slate">
              {summary}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-5 text-sm font-medium text-ink transition hover:bg-white/50"
              >
                {copied ? "Brief copied" : "Copy brief"}
              </button>
              {calendarUrl ? (
                <Link
                  href={calendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-copper px-5 text-sm font-medium text-paper transition hover:bg-copper/90"
                >
                  Continue to scheduling
                </Link>
              ) : (
                <p className="text-sm leading-6 text-slate">
                  Add <code>{siteConfig.calendarEnvName}</code> to enable the
                  live scheduling handoff on this page.
                </p>
              )}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
