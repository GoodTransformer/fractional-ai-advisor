import Link from "next/link";

import { AnimatedReveal } from "@/components/animated-reveal";
import { ArtefactDeck } from "@/components/artefact-deck";
import { ClientLogoStrip } from "@/components/client-logo-strip";
import { CTAGroup } from "@/components/cta-group";
import { FAQList } from "@/components/faq-list";
import { HomeHero } from "@/components/home-hero";
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
const heroImageSrc = `${publicBasePath}/hero-room.jpg`;
const heroRobotSceneSrc = `${publicBasePath}/hero-room-robot.jpg`;
export default function HomePage() {
  return (
    <>
      <HomeHero
        title={homePage.hero.title}
        descriptor={homePage.hero.descriptor}
        support={homePage.hero.support}
        backgroundImageSrc={heroImageSrc}
        robotSceneSrc={heroRobotSceneSrc}
        primaryCta={siteConfig.primaryCta}
        secondaryCta={siteConfig.heroSecondaryCta}
      />

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
        </div>
      </section>

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-[4.75rem] lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start lg:gap-16 xl:gap-20">
            <AnimatedReveal className="max-w-lg">
              <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
                {homePage.patrick.heading}
              </h2>
              <p className="mt-5 max-w-[29rem] text-base leading-7 text-slate md:text-lg">
                {homePage.patrick.body}
              </p>
              <Link href="/patrick" className="text-link mt-7 text-sm text-ink">
                More on Patrick
              </Link>
            </AnimatedReveal>

            <AnimatedReveal className="max-w-[42rem] lg:justify-self-end">
              <blockquote className="max-w-[34rem]">
                <p className="font-serif text-[clamp(2rem,4vw,3.35rem)] leading-[1.04] text-ink">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-4 text-sm text-slate">
                  {testimonial.attribution}
                </footer>
              </blockquote>

              <div className="mt-8 max-w-[30rem]">
                <p className="page-eyebrow text-ink/54">{proofSignals.label}</p>
                <div className="mt-5">
                  <ClientLogoStrip
                    items={proofSignals.organisations}
                    assetBasePath={publicBasePath}
                  />
                </div>
              </div>
            </AnimatedReveal>
          </div>

          <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[minmax(0,0.66fr)_minmax(0,1.34fr)] lg:items-start lg:gap-14 xl:gap-20">
            <AnimatedReveal className="max-w-sm lg:pt-8">
              <p className="page-eyebrow">{homePage.patrick.frame.label}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-[2.2rem]">
                {homePage.patrick.frame.heading}
              </h3>
              <p className="mt-5 max-w-[23rem] text-sm leading-7 text-slate md:text-base">
                {homePage.patrick.frame.body}
              </p>
              <p className="mt-5 max-w-[22rem] text-sm leading-6 text-ink/76">
                {homePage.patrick.frame.kicker}
              </p>
            </AnimatedReveal>

            <AnimatedReveal>
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
