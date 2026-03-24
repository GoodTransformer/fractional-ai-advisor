import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { CTAGroup } from "@/components/cta-group";
import { PageIntro } from "@/components/page-intro";
import { patrickPage, siteConfig, testimonial } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Patrick",
};

export default function PatrickPage() {
  return (
    <>
      <PageIntro title={patrickPage.title} body={patrickPage.intro} />

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="border-t border-line">
              {patrickPage.sections.map((section) => (
                <AnimatedReveal
                  key={section.title}
                  className="border-b border-line py-6"
                >
                  <h2 className="font-serif text-3xl text-ink">{section.title}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate">
                    {section.body}
                  </p>
                </AnimatedReveal>
              ))}
            </div>

            <AnimatedReveal className="border-t border-line pt-6">
              <p className="font-serif text-3xl leading-tight text-ink md:text-[2.1rem]">
                “{testimonial.quote}”
              </p>
              <p className="mt-4 text-sm leading-6 text-slate">
                {testimonial.attribution}
              </p>
              <div className="mt-10">
                <CTAGroup primary={siteConfig.primaryCta} tone="dark" />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>
    </>
  );
}
