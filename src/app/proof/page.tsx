import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAGroup } from "@/components/cta-group";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { proofContent, siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Proof",
};

export default function ProofPage() {
  return (
    <>
      <PageHero {...proofContent.hero} />

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="01"
              label="Proof Bar"
              heading="Trust should feel operational, not boastful."
              body="The strongest proof for this kind of offer is often not a giant claim. It is a credible mix of direct delivery, practical outputs, and clearer movement in the organisation."
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-line">
            {proofContent.proofBar.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 border-b border-line py-8 lg:grid-cols-[220px_minmax(0,1fr)]"
              >
                <h2 className="font-serif text-3xl text-ink">{item.title}</h2>
                <p className="max-w-3xl text-base leading-7 text-slate">{item.body}</p>
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule bg-[#f7f2ea]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="02"
              label="Deliverable Pack"
              heading="The sample deliverable pack is a better proof substitute than more thought leadership."
              body="When client detail is sensitive, show the work. The artefacts below are exactly the sort of proof that makes a fractional role feel concrete."
            />
          </AnimatedReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
            <AnimatedReveal className="border-t border-line pt-6">
              {proofContent.deliverables.map((item) => (
                <div key={item.title} className="border-b border-line py-5">
                  <h2 className="font-serif text-2xl text-ink">{item.title}</h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate">{item.body}</p>
                </div>
              ))}
            </AnimatedReveal>
            <AnimatedReveal className="grain rounded-[2rem] border border-line bg-white/70 p-6 shadow-glow md:p-8">
              <p className="page-eyebrow text-ink/48">Why this matters</p>
              <h2 className="mt-4 font-serif text-3xl text-ink">
                Buyers want to know what changes and what gets produced.
              </h2>
              <p className="mt-5 text-sm leading-6 text-slate">
                A roadmap page, a scorecard, a team guide, or a governance
                one-pager often does more conversion work than generic claims
                about innovation or transformation.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="03"
              label="Case Notes"
              heading="Component structure for anonymised mini case notes."
              body="Where approved proof is still being gathered, the page should already have a place for it. These slots are ready to accept anonymised client evidence without redesign."
            />
          </AnimatedReveal>
          <div className="mt-12 border-t border-line">
            {proofContent.caseNoteSlots.map((item) => (
              <AnimatedReveal
                key={item.label}
                className="grid gap-4 border-b border-line py-8 lg:grid-cols-[220px_minmax(0,1fr)]"
              >
                <div>
                  <p className="page-eyebrow text-ink/48">{item.label}</p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                    {item.status}
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-ink">{item.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate">
                    {item.body}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="04"
              label="Authority"
              heading="Use authority markers in support of the proof, not instead of it."
              body="Selected experience, writing credentials, and public-facing authority can strengthen the picture, but the most persuasive trust system still comes back to cadence, outputs, and changed operating reality."
              inverted
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-white/12">
            {proofContent.authority.map((item) => (
              <p key={item} className="border-b border-white/12 py-5 text-base leading-7 text-paper/72">
                {item}
              </p>
            ))}
          </AnimatedReveal>
          <AnimatedReveal className="mt-12">
            <CTAGroup
              primary={siteConfig.primaryCta}
              secondary={{ href: "/engagements#sample-plan", label: "See a sample 90-day plan" }}
              light
            />
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
