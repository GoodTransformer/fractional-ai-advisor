import Image from "next/image";
import Link from "next/link";

import { AnimatedReveal } from "@/components/animated-reveal";
import { ArtefactDeck } from "@/components/artefact-deck";
import { CTAGroup } from "@/components/cta-group";
import { FAQList } from "@/components/faq-list";
import {
  homePage,
  offers,
  operatingModel,
  proofSignals,
  siteConfig,
  testimonial,
} from "@/content/site-content";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "";
const isUserPagesSite =
  repository !== "" && repository === `${repositoryOwner}.github.io`;
const publicBasePath =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserPagesSite
    ? `/${repository}`
    : "";
const heroImageSrc = `${publicBasePath}/hero-room.png`;

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
        <Image
          src={heroImageSrc}
          alt="A sunlit workshop room with chairs facing a screen showing an AI adoption plan."
          fill
          priority
          className="object-cover object-[68%_center] opacity-90 animate-drift md:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,17,0.56),rgba(8,12,17,0.26)_34%,rgba(8,12,17,0.08)_68%),linear-gradient(180deg,rgba(8,12,17,0.16),rgba(8,12,17,0.08)_28%,rgba(8,12,17,0.42)_64%,rgba(8,12,17,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(255,241,228,0.16),transparent_20%),radial-gradient(circle_at_84%_18%,rgba(166,94,66,0.12),transparent_22%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-16 pt-28 md:px-10 md:pb-20 lg:px-12 lg:pb-24">
          <AnimatedReveal className="max-w-5xl" stagger>
            <p className="eyebrow">{homePage.hero.brand}</p>
            <h1 className="hero-shadow mt-6 max-w-5xl font-serif text-[clamp(4.5rem,12vw,9.5rem)] leading-[0.88] text-paper">
              {homePage.hero.title}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-paper/72 md:text-base">
              {homePage.hero.descriptor}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-7 text-paper/78 md:text-lg">
              {homePage.hero.support}
            </p>
            <div className="mt-10">
              <CTAGroup
                primary={siteConfig.primaryCta}
                secondary={siteConfig.heroSecondaryCta}
                tone="light"
              />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
            <AnimatedReveal>
              <h2 className="max-w-2xl font-serif text-4xl leading-tight text-ink md:text-5xl">
                {homePage.role.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate md:text-lg">
                {homePage.role.support}
              </p>
            </AnimatedReveal>

            <AnimatedReveal className="border-t border-line pt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {operatingModel.map((item) => (
                  <div key={item.name} className="border-b border-line pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-5 last:border-r-0">
                    <h3 className="font-serif text-3xl text-ink">{item.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate">{item.line}</p>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal className="max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              {homePage.services.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate md:text-lg">
              {homePage.services.intro}
            </p>
          </AnimatedReveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {offers.map((offer) => (
              <AnimatedReveal key={offer.name} className="border-t border-line pt-5">
                <p className="page-eyebrow">{offer.duration}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">
                  {offer.name}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-slate">
                  {offer.purpose}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate">
                  {offer.outputs.map((item) => (
                    <li key={item} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="mt-10 flex flex-col gap-4 border-t border-line pt-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-6 text-slate">
              {homePage.services.note}
            </p>
            <Link href="/services" className="text-link text-sm text-ink">
              See full service detail
            </Link>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <AnimatedReveal>
              <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
                {homePage.patrick.heading}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-slate md:text-lg">
                {homePage.patrick.body}
              </p>
              <Link href="/patrick" className="text-link mt-8 text-sm text-ink">
                More on Patrick
              </Link>
            </AnimatedReveal>

            <AnimatedReveal className="grid gap-10">
              <blockquote className="border-t border-line pt-5">
                <p className="font-serif text-3xl leading-tight text-ink md:text-[2.2rem]">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-4 text-sm text-slate">{testimonial.attribution}</footer>
              </blockquote>

              <div className="grid gap-4 border-t border-line pt-5 text-sm leading-6 text-slate">
                <p>{proofSignals.experience}</p>
              </div>

              <ArtefactDeck items={proofSignals.artefacts} />
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal className="max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              Questions that usually come up.
            </h2>
          </AnimatedReveal>
          <AnimatedReveal className="mt-12">
            <FAQList items={homePage.faqs} />
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-divider bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal className="max-w-4xl">
            <h2 className="font-serif text-4xl leading-tight text-paper md:text-6xl">
              {homePage.finalCta.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-paper/74 md:text-lg">
              {homePage.finalCta.body}
            </p>
            <div className="mt-10">
              <CTAGroup primary={siteConfig.primaryCta} tone="light" />
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
