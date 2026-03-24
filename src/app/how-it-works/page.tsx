import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAGroup } from "@/components/cta-group";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  howItWorksContent,
  operatingModel,
  siteConfig,
} from "@/content/site-content";

export const metadata: Metadata = {
  title: "How It Works",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero {...howItWorksContent.hero} />

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="01"
              label="Lead / Embed / Enable"
              heading="Three layers, one operating model."
              body="The value is not that the offer does many things. It is that the work connects leadership direction, operational design, and team capability without becoming vague."
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-line">
            {operatingModel.map((item) => (
              <div
                key={item.name}
                className="grid gap-4 border-b border-line py-8 lg:grid-cols-[180px_minmax(0,0.8fr)_minmax(0,1fr)]"
              >
                <h2 className="font-serif text-3xl text-ink">{item.name}</h2>
                <p className="text-base leading-7 text-slate">{item.summary}</p>
                <p className="text-base leading-7 text-slate/88">{item.outcome}</p>
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
              label="Cadence"
              heading="What the work looks like in practice."
              body="Defined cadence is what makes a fractional role feel credible rather than vague. These working rhythms keep direction, delivery, and adoption connected."
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-line">
            {howItWorksContent.cadence.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 border-b border-line py-8 lg:grid-cols-[240px_minmax(0,1fr)]"
              >
                <h2 className="font-serif text-3xl text-ink">{item.title}</h2>
                <p className="max-w-3xl text-base leading-7 text-slate">{item.body}</p>
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="03"
              label="90-Day Arc"
              heading="What changes across the first 90 days."
              body="The exact scope depends on the engagement, but the movement is consistent: clarify direction, redesign selected workflows, then normalise practice and reporting."
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-line">
            {howItWorksContent.ninetyDays.map((item) => (
              <div
                key={item.phase}
                className="grid gap-4 border-b border-line py-8 lg:grid-cols-[180px_minmax(0,1fr)]"
              >
                <p className="page-eyebrow text-ink/48">{item.phase}</p>
                <p className="max-w-3xl text-base leading-7 text-slate">{item.body}</p>
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="04"
              label="Boundaries"
              heading="Clear decision rights keep the work sharp."
              body="The job is to create momentum and improve judgement, not to replace every internal owner or quietly become an implementation bottleneck."
              inverted
            />
          </AnimatedReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <AnimatedReveal className="border-t border-white/12 pt-6">
              <p className="page-eyebrow text-paper/58">Decision rights</p>
              <div className="mt-5 grid gap-4">
                {howItWorksContent.decisionRights.map((item) => (
                  <p key={item} className="border-b border-white/12 pb-4 text-base leading-7 text-paper/72">
                    {item}
                  </p>
                ))}
              </div>
            </AnimatedReveal>
            <AnimatedReveal className="border-t border-white/12 pt-6">
              <p className="page-eyebrow text-paper/58">What this is not</p>
              <div className="mt-5 grid gap-4">
                {howItWorksContent.boundaries.map((item) => (
                  <p key={item} className="border-b border-white/12 pb-4 text-base leading-7 text-paper/72">
                    {item}
                  </p>
                ))}
              </div>
            </AnimatedReveal>
          </div>
          <AnimatedReveal className="mt-12">
            <CTAGroup
              primary={siteConfig.primaryCta}
              secondary={{ href: "/engagements", label: "See engagement options" }}
              light
            />
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
