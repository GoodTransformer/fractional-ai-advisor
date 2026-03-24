import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAGroup } from "@/components/cta-group";
import { PageIntro } from "@/components/page-intro";
import { offers, servicesPage, siteConfig } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro title={servicesPage.title} body={servicesPage.intro} />

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12 lg:py-16">
          <div className="border-t border-line">
            {offers.map((offer) => (
              <AnimatedReveal
                key={offer.name}
                className="grid gap-6 border-b border-line py-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.9fr)_minmax(0,0.8fr)] lg:gap-10"
              >
                <div>
                  <p className="page-eyebrow">{offer.duration}</p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-ink">
                    {offer.name}
                  </h2>
                </div>

                <div>
                  <p className="text-base leading-7 text-slate">{offer.purpose}</p>
                  {offer.fit ? (
                    <p className="mt-4 text-sm leading-6 text-slate">{offer.fit}</p>
                  ) : null}
                </div>

                <div className="grid gap-5">
                  <ul className="space-y-3 text-sm leading-6 text-slate">
                    {offer.outputs.map((item) => (
                      <li key={item} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {offer.cadence ? (
                    <div className="text-sm leading-6 text-slate">
                      {offer.cadence.join(" / ")}
                    </div>
                  ) : null}
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="mt-8 text-sm leading-6 text-slate">
            {servicesPage.close}
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12 lg:py-16">
          <AnimatedReveal className="max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              A simple 90-day arc.
            </h2>
          </AnimatedReveal>

          <div className="mt-10 border-t border-line">
            {servicesPage.sampleArc.map((item) => (
              <AnimatedReveal
                key={item.phase}
                className="grid gap-4 border-b border-line py-6 lg:grid-cols-[180px_minmax(0,1fr)]"
              >
                <p className="page-eyebrow">{item.phase}</p>
                <p className="max-w-3xl text-base leading-7 text-slate">{item.body}</p>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="mt-10">
            <CTAGroup primary={siteConfig.primaryCta} tone="dark" />
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
