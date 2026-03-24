import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAGroup } from "@/components/cta-group";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SamplePlan } from "@/components/sample-plan";
import { engagementsContent, offers, siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Engagements",
};

export default function EngagementsPage() {
  return (
    <>
      <PageHero {...engagementsContent.hero} />

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="01"
              label="Offer Ladder"
              heading="Start with the clearest next step, not the biggest one."
              body="Each offer is designed to answer a different buyer state: clarity first, implementation bridge next, and retained momentum only when it earns its place."
            />
          </AnimatedReveal>

          <AnimatedReveal className="mt-12 border-t border-line">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className="grid gap-5 border-b border-line py-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.8fr)_minmax(0,1fr)]"
              >
                <div>
                  <p className="page-eyebrow text-ink/48">{offer.length}</p>
                  <h2 className="mt-2 font-serif text-3xl text-ink">{offer.name}</h2>
                </div>
                <div>
                  <p className="text-base leading-7 text-slate">{offer.summary}</p>
                  <p className="mt-4 text-sm leading-6 text-slate/86">{offer.fit}</p>
                  <p className="mt-4 text-sm leading-6 text-slate/86">{offer.cadence}</p>
                </div>
                <div className="grid gap-3">
                  {offer.outputs.map((item) => (
                    <p key={item} className="border-b border-line pb-3 text-sm leading-6 text-slate last:border-b-0 last:pb-0">
                      {item}
                    </p>
                  ))}
                </div>
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
              label="Comparison"
              heading="Different engagement shapes, one operating logic."
              body={engagementsContent.pricingNote}
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-line">
            {engagementsContent.comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-4 border-b border-line py-6 lg:grid-cols-[220px_repeat(3,minmax(0,1fr))]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/52">
                  {row.label}
                </p>
                {row.values.map((value) => (
                  <p key={value} className="text-sm leading-6 text-slate">
                    {value}
                  </p>
                ))}
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </section>

      <section id="sample-plan" className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="03"
              label="Sample 90-Day Plan"
              heading="An example of how the first 12 weeks can unfold."
              body="This is a representative structure rather than a fixed template. The point is to make the work visible: direction first, then workflow change, then normalisation."
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12">
            <SamplePlan items={engagementsContent.samplePlan} />
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal className="max-w-4xl">
            <p className="eyebrow">Next step</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-paper md:text-6xl">
              Buy the smallest engagement that can create real momentum.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-paper/72 md:text-lg">
              The clarity call is there to route you sensibly. If the sprint is
              enough, that should be the recommendation. If retained support is
              needed, the cadence and boundaries should already be legible.
            </p>
            <div className="mt-10">
              <CTAGroup
                primary={siteConfig.primaryCta}
                secondary={{ href: "/how-it-works", label: "See the operating model" }}
                light
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
