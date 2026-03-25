"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

import type { ProofOrganisation } from "@/content/site-content";

type ClientLogoStripProps = {
  items: ProofOrganisation[];
  assetBasePath?: string;
};

export function ClientLogoStrip({
  items,
  assetBasePath = "",
}: ClientLogoStripProps) {
  const [failedLogos, setFailedLogos] = useState<string[]>([]);
  const stripClassName = [
    "client-logo-strip",
    items.length === 4 ? "client-logo-strip--four" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={stripClassName} aria-label="Worked with leaders at">
      {items.map((item, index) => {
        const isFailed = failedLogos.includes(item.slug);

        return (
          <div
            key={item.slug}
            className={[
              "client-logo-cell",
              `client-logo-cell--slot-${index + 1}`,
              `client-logo-cell--${item.slug}`,
              isFailed ? "is-hidden" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={
              {
                "--client-logo-max-width": `${item.maxWidth}rem`,
              } as CSSProperties
            }
            aria-hidden={isFailed || undefined}
          >
            <Image
              src={`${assetBasePath}${item.src}`}
              alt={item.name}
              width={item.width}
              height={item.height}
              className="client-logo-image"
              unoptimized
              loading="lazy"
              onError={() => {
                setFailedLogos((current) =>
                  current.includes(item.slug) ? current : [...current, item.slug],
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
