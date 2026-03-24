import { CTAGroup } from "@/components/cta-group";
import { siteConfig } from "@/content/site-content";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-haze">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-36 md:px-10 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="max-w-4xl">
          <p className="page-eyebrow text-ink/55">{label}</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-ink md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate md:text-lg">
            {description}
          </p>
          <div className="mt-8">
            <CTAGroup
              primary={siteConfig.primaryCta}
              secondary={siteConfig.secondaryCta}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
