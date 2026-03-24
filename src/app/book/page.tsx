import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { bookingContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Book a Call",
};

export default function BookPage() {
  return (
    <>
      <PageHero {...bookingContent.hero} />

      <section className="section-rule">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <AnimatedReveal>
            <SectionHeading
              number="01"
              label="Qualification"
              heading="A short brief first, then the booking handoff."
              body="This keeps the call grounded in the real situation: ownership, tools, workflow friction, and what success should look like inside 90 days."
            />
          </AnimatedReveal>
          <AnimatedReveal className="mt-12">
            <BookingForm />
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
