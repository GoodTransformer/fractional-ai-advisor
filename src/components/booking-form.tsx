"use client";

import Link from "next/link";
import {
  startTransition,
  useDeferredValue,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { bookingContent, siteConfig } from "@/content/site-content";

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
  const calendarUrl = process.env.NEXT_PUBLIC_CLARITY_CALL_URL ?? "";
  const deferredTools = useDeferredValue(form.tools);
  const deferredOutcome = useDeferredValue(form.outcome);

  const summary = [
    `Organisation size: ${form.organisationSize || "Not provided"}`,
    `Sector: ${form.sector || "Not provided"}`,
    `Current reality: ${
      form.currentState.length > 0 ? form.currentState.join("; ") : "Not provided"
    }`,
    `Tools in use: ${form.tools.trim() || "Not provided"}`,
    `90-day outcome: ${form.outcome.trim() || "Not provided"}`,
  ].join("\n");

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleCurrentState(item: string) {
    setForm((current) => {
      const exists = current.currentState.includes(item);
      const currentState = exists
        ? current.currentState.filter((entry) => entry !== item)
        : [...current.currentState, item];

      return { ...current, currentState };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(() => setSubmitted(true));
  }

  function handleTextArea(
    key: "tools" | "outcome",
    event: ChangeEvent<HTMLTextAreaElement>,
  ) {
    updateField(key, event.target.value);
  }

  const canSubmit =
    Boolean(form.organisationSize) &&
    Boolean(form.sector) &&
    form.currentState.length > 0 &&
    Boolean(form.outcome.trim());

  const schedulingHref = calendarUrl;

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-line bg-white/70 p-6 shadow-glow backdrop-blur md:p-8"
      >
        <div className="grid gap-8">
          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="organisation-size">
              Organisation size
            </label>
            <select
              id="organisation-size"
              className="mt-3 min-h-12 w-full rounded-2xl border border-line bg-paper px-4 text-base text-ink outline-none transition focus:border-copper"
              value={form.organisationSize}
              onChange={(event) => updateField("organisationSize", event.target.value)}
            >
              <option value="">Select one</option>
              {bookingContent.fields.orgSizes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="sector">
              Sector
            </label>
            <select
              id="sector"
              className="mt-3 min-h-12 w-full rounded-2xl border border-line bg-paper px-4 text-base text-ink outline-none transition focus:border-copper"
              value={form.sector}
              onChange={(event) => updateField("sector", event.target.value)}
            >
              <option value="">Select one</option>
              {bookingContent.fields.sectors.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold text-ink">
              What is happening now?
            </legend>
            <div className="mt-4 grid gap-3">
              {bookingContent.fields.currentState.map((item) => {
                const checked = form.currentState.includes(item);

                return (
                  <label
                    key={item}
                    className="flex cursor-pointer items-start gap-3 rounded-2xl border border-line bg-paper px-4 py-4 text-sm leading-6 text-slate transition hover:border-copper/40"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleCurrentState(item)}
                      className="mt-1 h-4 w-4 rounded border-line text-copper focus:ring-copper"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="tools">
              Tools currently in use
            </label>
            <textarea
              id="tools"
              rows={4}
              value={form.tools}
              onChange={(event) => handleTextArea("tools", event)}
              className="mt-3 w-full rounded-[1.5rem] border border-line bg-paper px-4 py-3 text-base leading-7 text-ink outline-none transition focus:border-copper"
              placeholder="For example: ChatGPT, Microsoft Copilot, Claude, Gemini, internal tooling, or mixed personal accounts."
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-ink" htmlFor="outcome">
              What would success look like in 90 days?
            </label>
            <textarea
              id="outcome"
              rows={4}
              value={form.outcome}
              onChange={(event) => handleTextArea("outcome", event)}
              className="mt-3 w-full rounded-[1.5rem] border border-line bg-paper px-4 py-3 text-base leading-7 text-ink outline-none transition focus:border-copper"
              placeholder="Describe the outcome in plain language."
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-copper px-6 text-sm font-semibold text-paper transition enabled:hover:bg-[#a85231] disabled:cursor-not-allowed disabled:bg-copper/45"
            >
              Qualify and continue
            </button>
            <p className="text-sm text-slate">
              {siteConfig.primaryCta.label} follows this short brief.
            </p>
          </div>
        </div>
      </form>

      <aside className="flex flex-col justify-between rounded-[2rem] border border-line bg-[#f7f2ea] p-6 md:p-8">
        <div>
          <p className="page-eyebrow text-ink/48">Call brief</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-ink">
            Keep it brief. Make it useful.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate">
            The questions are there to sharpen the conversation, not to create
            admin. The output of this step is a short briefing summary and a
            clean handoff into scheduling.
          </p>
          <div className="mt-8 border-t border-line pt-5">
            <p className="text-sm font-semibold text-ink">Live preview</p>
            <dl className="mt-4 grid gap-4 text-sm leading-6 text-slate">
              <div>
                <dt className="font-semibold text-ink">Organisation size</dt>
                <dd>{form.organisationSize || "Add your organisation size"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Sector</dt>
                <dd>{form.sector || "Add your sector"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Tools in use</dt>
                <dd>{deferredTools.trim() || "Add tools already in use"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">90-day outcome</dt>
                <dd>{deferredOutcome.trim() || "Add the outcome you want"}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-5">
          {submitted ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                Qualification complete
              </p>
              <p className="mt-3 text-sm leading-6 text-slate whitespace-pre-line">
                {summary}
              </p>
              {schedulingHref ? (
                <Link
                  href={schedulingHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-[#1b2d39]"
                >
                  Continue to scheduling
                </Link>
              ) : (
                <p className="mt-6 text-sm leading-6 text-slate">
                  Add <code>{siteConfig.calendarEnvName}</code> to enable the
                  live calendar handoff on this page.
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-ink">Bring to the call</p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate">
                {bookingContent.callPrep.map((item) => (
                  <li key={item} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
