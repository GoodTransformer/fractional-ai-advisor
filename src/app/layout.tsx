import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site-content";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.offerName} | ${siteConfig.descriptor}`,
    template: `%s | ${siteConfig.offerName}`,
  },
  description:
    "A premium, conversion-focused site for a productised advisory offer that helps leaders turn AI intent into practical operational use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${sans.variable} ${serif.variable} site-frame`}>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
