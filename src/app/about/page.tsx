import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAGroup } from "@/components/cta-group";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutContent, siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "About Patrick",
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutContent.hero} />

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="01"
              label="How Patrick Works"
              heading="The operating style matters as much as the expertise."
              body="The buyer is hiring direct judgement and follow-through. The work should feel calm, commercially literate, and specific enough to make next decisions easier."
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-line">
            {aboutContent.principles.map((item) => (
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
              label="What Clients Get"
              heading="The advantage of a named advisor is coherence."
              body="The role is designed to keep leadership, functions, and teams inside one logic rather than splitting direction, rollout, and enablement into disconnected workstreams."
            />
          </AnimatedReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)]">
            <AnimatedReveal className="border-t border-line pt-6">
              {aboutContent.whatClientsGet.map((item) => (
                <p key={item} className="border-b border-line pb-4 pt-2 text-base leading-7 text-slate">
                  {item}
                </p>
              ))}
            </AnimatedReveal>
            <AnimatedReveal className="border-t border-line pt-6">
              <p className="page-eyebrow text-ink/48">Umbrella brand</p>
              <h2 className="mt-4 font-serif text-3xl text-ink">Good Transformer</h2>
              <p className="mt-4 text-base leading-7 text-slate">
                Good Transformer remains the umbrella brand, but the offer is
                intentionally fronted by Patrick because that is how serious
                buyers understand the engagement: they are buying a person’s
                judgement, rhythm, and ability to carry the work across teams.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="section-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="03"
              label="Boundaries"
              heading="Just as important: what Patrick is not selling."
              body="A premium advisory role becomes easier to trust when its boundaries are visible. The point is not to sound smaller. The point is to sound precise."
              inverted
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12 border-t border-white/12">
            {aboutContent.notSelling.map((item) => (
              <p key={item} className="border-b border-white/12 py-5 text-base leading-7 text-paper/72">
                {item}
              </p>
            ))}
          </AnimatedReveal>
          <AnimatedReveal className="mt-12">
            <CTAGroup
              primary={siteConfig.primaryCta}
              secondary={{ href: "/proof", label: "See how trust is built" }}
              light
            />
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
