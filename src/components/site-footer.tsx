import Link from "next/link";

import { navigation, siteConfig } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-[#efe8dd]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-12">
        <div className="max-w-2xl">
          <p className="page-eyebrow text-ink/50">{siteConfig.umbrellaBrand}</p>
          <p className="mt-4 font-serif text-3xl leading-tight text-ink">
            {siteConfig.offerName}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate">
            A premium, productised advisory offer for organisations that need
            AI direction, workflow change, and team capability to move together.
          </p>
        </div>
        <nav className="grid gap-3 text-sm font-medium text-ink/75">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="calm-link w-fit">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
