import type { Metadata } from "next";

import { AnimatedReveal } from "@/components/animated-reveal";
import { BookingForm } from "@/components/booking-form";
import { PageIntro } from "@/components/page-intro";
import { bookingPage } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Book a Business Call",
};

export default function BusinessBookPage() {
  return (
    <>
      <PageIntro title={bookingPage.business.title} body={bookingPage.business.intro} />

      <section className="section-divider">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12 lg:py-16">
          <AnimatedReveal className="max-w-2xl">
            <p className="text-base leading-7 text-slate md:text-lg">
              {bookingPage.business.body}
            </p>
          </AnimatedReveal>
          <AnimatedReveal className="mt-12">
            <BookingForm />
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
