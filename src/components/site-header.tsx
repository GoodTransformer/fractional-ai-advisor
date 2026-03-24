"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation, siteConfig } from "@/content/site-content";

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const shellClass = isHome
    ? scrolled
      ? "border-b border-white/10 bg-ink/84 text-paper shadow-glow backdrop-blur-xl"
      : "bg-transparent text-paper"
    : "border-b border-line bg-paper/88 text-ink backdrop-blur-xl";

  const navLinkClass = isHome && !scrolled ? "text-paper/78 hover:text-paper" : "text-ink/72 hover:text-ink";
  const ctaClass = isHome && !scrolled
    ? "border border-paper/30 bg-paper/10 text-paper hover:bg-paper/16"
    : "bg-copper text-paper hover:bg-[#a85231]";

  return (
    <header
      className={classNames(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        shellClass,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <Link href="/" className="min-w-0">
          <p className="page-eyebrow opacity-70">{siteConfig.umbrellaBrand}</p>
          <p className="truncate text-sm font-semibold tracking-[0.12em] uppercase">
            {siteConfig.offerName}
          </p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "text-sm font-medium transition-colors",
                  active ? "text-current" : navLinkClass,
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={siteConfig.primaryCta.href}
            className={classNames(
              "inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold transition-colors",
              ctaClass,
            )}
          >
            {siteConfig.primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </div>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-current/10 px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isHome && !scrolled ? "text-sm font-medium text-paper/82" : "text-sm font-medium text-ink/82"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={siteConfig.primaryCta.href}
            className={classNames(
              "inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold transition-colors",
              ctaClass,
            )}
          >
            {siteConfig.primaryCta.label}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
