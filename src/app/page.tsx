import Image from "next/image";
import Link from "next/link";

import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAGroup } from "@/components/cta-group";
import { FAQList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { homeContent, offers, operatingModel, siteConfig } from "@/content/site-content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
        <Image
          src="/hero-scene.svg"
          alt="A stylised meeting-room scene with a work table, papers, and city windows."
          fill
          priority
          className="object-cover object-center opacity-70 animate-drift"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,28,0.34),rgba(12,20,28,0.54)_28%,rgba(12,20,28,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,244,233,0.18),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(191,97,57,0.2),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-16 pt-28 md:px-10 md:pb-20 lg:px-12 lg:pb-24">
          <AnimatedReveal className="max-w-4xl" stagger>
              <p className="eyebrow">{homeContent.hero.label}</p>
              <h1 className="hero-shadow mt-6 font-sans text-5xl font-semibold uppercase tracking-[0.14em] text-paper sm:text-6xl md:text-7xl lg:text-[7.25rem] lg:leading-[0.95]">
                {homeContent.hero.title}
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.26em] text-paper/70 md:text-base">
                {homeContent.hero.descriptor}
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-paper/78 md:text-xl">
                {homeContent.hero.summary}
              </p>
              <div className="mt-10">
                <CTAGroup
                  primary={siteConfig.primaryCta}
                  secondary={siteConfig.secondaryCta}
                  light
                />
              </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="01"
              label={homeContent.situation.label}
              heading={homeContent.situation.heading}
              body={homeContent.situation.body}
            />
          </AnimatedReveal>

          <AnimatedReveal className="mt-12 border-t border-line">
            <div className="grid gap-4 py-8 md:grid-cols-2">
              {homeContent.situation.points.map((point) => (
                <div key={point} className="border-b border-line pb-5 text-lg leading-7 text-slate">
                  {point}
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="02"
              label={homeContent.definition.label}
              heading={homeContent.definition.heading}
              body={homeContent.definition.body}
            />
          </AnimatedReveal>

          <AnimatedReveal className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1.2fr)_320px]">
            <p className="max-w-3xl text-base leading-7 text-slate md:text-lg">
              Think of it as the closest thing to a fractional Head of AI for
              organisations that need momentum and judgement, but with explicit
              focus on leadership decisions, workflow adoption, and workforce
              capability rather than a vague “strategy” lane.
            </p>
            <div className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="page-eyebrow text-ink/48">Core meaning</p>
              <p className="mt-3 font-serif text-2xl leading-tight text-ink">
                I turn leadership intent on AI into operational use, team by
                team, until it sticks.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="03"
              label={homeContent.operatingModel.label}
              heading={homeContent.operatingModel.heading}
              body={homeContent.operatingModel.body}
              inverted
            />
          </AnimatedReveal>

          <AnimatedReveal className="mt-12 border-t border-white/12">
            {operatingModel.map((item) => (
              <div
                key={item.name}
                className="grid gap-4 border-b border-white/12 py-8 lg:grid-cols-[220px_minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-8"
              >
                <h3 className="font-serif text-4xl text-paper">{item.name}</h3>
                <p className="text-base leading-7 text-paper/78">{item.summary}</p>
                <p className="text-base leading-7 text-paper/68">{item.outcome}</p>
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="04"
              label={homeContent.fit.label}
              heading={homeContent.fit.heading}
              body={homeContent.fit.intro}
            />
          </AnimatedReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <AnimatedReveal className="border-t border-line pt-6">
              <p className="page-eyebrow text-ink/48">Who it is for</p>
              <div className="mt-5 grid gap-4">
                {homeContent.fit.fitSignals.map((item) => (
                  <p key={item} className="border-b border-line pb-4 text-base leading-7 text-slate">
                    {item}
                  </p>
                ))}
              </div>
            </AnimatedReveal>

            <AnimatedReveal className="border-t border-line pt-6">
              <p className="page-eyebrow text-ink/48">Who it is not for</p>
              <div className="mt-5 grid gap-4">
                {homeContent.fit.nonFitSignals.map((item) => (
                  <p key={item} className="border-b border-line pb-4 text-base leading-7 text-slate">
                    {item}
                  </p>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="05"
              label={homeContent.process.label}
              heading={homeContent.process.heading}
              body={homeContent.process.body}
            />
          </AnimatedReveal>

          <AnimatedReveal className="mt-12 border-t border-line">
            {homeContent.process.steps.map((step) => (
              <div
                key={step.name}
                className="grid gap-4 border-b border-line py-8 lg:grid-cols-[180px_minmax(0,1fr)]"
              >
                <p className="font-serif text-3xl text-ink">{step.name}</p>
                <p className="max-w-3xl text-base leading-7 text-slate">{step.summary}</p>
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule bg-[#f7f2ea]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="06"
              label={homeContent.engagements.label}
              heading={homeContent.engagements.heading}
              body={homeContent.engagements.body}
            />
          </AnimatedReveal>

          <AnimatedReveal className="mt-12 border-t border-line">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className="grid gap-5 border-b border-line py-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,0.9fr)]"
              >
                <div>
                  <p className="page-eyebrow text-ink/46">{offer.length}</p>
                  <h3 className="mt-2 font-serif text-3xl text-ink">{offer.name}</h3>
                </div>
                <div>
                  <p className="text-base leading-7 text-slate">{offer.summary}</p>
                  <p className="mt-4 text-sm leading-6 text-slate/86">{offer.fit}</p>
                </div>
                <div className="grid gap-3">
                  {offer.outputs.map((output) => (
                    <p key={output} className="border-b border-line pb-3 text-sm leading-6 text-slate last:border-b-0 last:pb-0">
                      {output}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </AnimatedReveal>

          <AnimatedReveal className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-slate">
              {homeContent.engagements.note}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/engagements" className="calm-link text-sm font-semibold text-ink">
                See engagement detail
              </Link>
              <Link
                href="/engagements#sample-plan"
                className="calm-link text-sm font-semibold text-ink"
              >
                See a sample 90-day plan
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="07"
              label={homeContent.proof.label}
              heading={homeContent.proof.heading}
              body={homeContent.proof.body}
            />
          </AnimatedReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <AnimatedReveal className="border-t border-line pt-6">
              <p className="page-eyebrow text-ink/48">What proof looks like</p>
              <div className="mt-5 grid gap-4">
                {homeContent.proof.signals.map((item) => (
                  <p key={item} className="border-b border-line pb-4 text-base leading-7 text-slate">
                    {item}
                  </p>
                ))}
              </div>
              <Link href="/proof" className="mt-8 inline-flex text-sm font-semibold text-ink calm-link">
                See the proof system
              </Link>
            </AnimatedReveal>

            <AnimatedReveal className="grain overflow-hidden rounded-[2rem] border border-line bg-white/70 p-6 shadow-glow md:p-8">
              <p className="page-eyebrow text-ink/48">Sample deliverable pack</p>
              <h3 className="mt-4 font-serif text-3xl text-ink">
                The artefacts are part of the sale.
              </h3>
              <div className="mt-8 border-t border-line">
                {homeContent.proof.artefacts.map((item) => (
                  <div key={item} className="border-b border-line py-4 text-sm font-medium text-slate">
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="08"
              label={homeContent.about.label}
              heading={homeContent.about.heading}
              body={homeContent.about.body}
            />
          </AnimatedReveal>

          <div className="mt-12 grid gap-10 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <AnimatedReveal>
              <p className="max-w-3xl text-base leading-7 text-slate md:text-lg">
                The role sits between leadership intent, operational change, and
                workforce confidence. That range only feels credible when one
                person can keep the picture coherent and keep decisions moving.
              </p>
              <Link href="/about" className="mt-8 inline-flex text-sm font-semibold text-ink calm-link">
                More about Patrick
              </Link>
            </AnimatedReveal>

            <AnimatedReveal className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {homeContent.about.points.map((item) => (
                <p key={item} className="border-b border-line pb-4 pt-2 text-sm leading-6 text-slate last:border-b-0">
                  {item}
                </p>
              ))}
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="section-rule bg-[#f8f4ed]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="09"
              label="FAQ"
              heading="Common questions, answered plainly."
            />
          </AnimatedReveal>

          <AnimatedReveal className="mt-12">
            <FAQList items={homeContent.faqs} />
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-rule bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal className="max-w-4xl">
            <p className="eyebrow">{homeContent.finalCta.label}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-paper md:text-6xl">
              {homeContent.finalCta.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-paper/72 md:text-lg">
              {homeContent.finalCta.body}
            </p>
            <div className="mt-10">
              <CTAGroup
                primary={siteConfig.primaryCta}
                secondary={siteConfig.secondaryCta}
                light
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
