"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

import { CTAGroup } from "@/components/cta-group";

type Action = {
  href: string;
  label: string;
};

type HomeHeroProps = {
  title: string;
  descriptor: string;
  support: string;
  backgroundImageSrc: string;
  robotSceneSrc: string;
  primaryCta: Action;
  secondaryCta: Action;
};

export function HomeHero({
  title,
  descriptor,
  support,
  backgroundImageSrc,
  robotSceneSrc,
  primaryCta,
  secondaryCta,
}: HomeHeroProps) {
  const [revealed, setRevealed] = useState(false);
  const baseSceneStyle = {
    backgroundImage: `url("${backgroundImageSrc}")`,
  } satisfies CSSProperties;
  const robotSceneStyle = {
    backgroundImage: `url("${robotSceneSrc}")`,
  } satisfies CSSProperties;

  return (
    <section
      className="hero-stage relative min-h-[100svh] overflow-hidden bg-ink text-paper"
      onPointerLeave={() => setRevealed(false)}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") {
          return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const inRevealZone = x >= 0.72;

        setRevealed((current) =>
          current === inRevealZone ? current : inRevealZone,
        );
      }}
    >
      <Image
        src={robotSceneSrc}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px opacity-0"
        width={1}
        height={1}
        unoptimized
      />
      <div
        aria-hidden="true"
        className="hero-scene absolute inset-0 hidden md:block"
        style={baseSceneStyle}
      />
      <div
        aria-hidden="true"
        className={`hero-robot-scene hidden md:block${revealed ? " is-visible" : ""}`}
        style={robotSceneStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,16,0.9)_0%,rgba(8,12,16,0.8)_24%,rgba(8,12,16,0.56)_42%,rgba(8,12,16,0.24)_60%,rgba(8,12,16,0.05)_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(8,12,16,0.24),transparent_34%),linear-gradient(180deg,rgba(8,12,16,0.24)_0%,rgba(8,12,16,0.08)_28%,rgba(8,12,16,0.12)_100%)]"
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32 lg:px-14 lg:pt-36">
        <div className="hero-copy-enter max-w-[29rem] md:-mt-7 lg:-mt-11 lg:max-w-[33rem]">
          <div className="hero-title-lock">
            <h1 className="hero-shadow max-w-[7ch] font-serif text-[clamp(3.25rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em] text-paper">
              {title}
            </h1>
            <p className="mt-4 text-[0.76rem] uppercase tracking-[0.24em] text-paper/70 md:mt-3 md:text-[0.88rem]">
              {descriptor}
            </p>
          </div>
          <p className="mt-5 max-w-[26rem] text-[0.98rem] leading-7 text-paper/78 md:mt-4 md:text-[1.05rem]">
            {support}
          </p>
          <div className="mt-8 md:mt-7">
            <CTAGroup
              primary={primaryCta}
              secondary={secondaryCta}
              tone="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
