"use client";

import Link from "next/link";
import { motion } from "motion/react";

import BookNowTrigger from "@/app/components/booking/BookNowTrigger";
import {
  MagneticButton,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/app/components/home/motion-primitives";
import { AREA_CITIES, areaCityUrlPath } from "@/app/lib/areas-we-serve-content";
import { CONSULTATION_CTA } from "@/app/lib/services-content";
import { CONTACT } from "@/app/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * /areas-we-serve/ index: hero + a card per surrounding community we serve,
 * linking to each city's hub page.
 */
export default function AreaIndexView() {
  return (
    <article className="bg-white">
      <nav
        aria-label="Breadcrumb"
        className="border-b border-brand-line bg-brand-mist/60"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-xs">
          <li>
            <Link
              href="/"
              className="font-semibold uppercase tracking-[0.12em] text-brand-ink/60 transition-colors hover:text-brand-blue"
            >
              Home
            </Link>
          </li>
          <li aria-hidden className="text-brand-ink/30">
            /
          </li>
          <li
            aria-current="page"
            className="font-semibold uppercase tracking-[0.12em] text-brand-navy"
          >
            Areas We Serve
          </li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-mist/30 to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-sky/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Kane &amp; DuPage County
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                Areas We Serve
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
              Genesis Integrative Medicine sees patients from Geneva and the
              surrounding Kane and DuPage County communities. Our one office,
              1881 S. Randall Rd, Suite C in Geneva, is a short drive from
              each of the towns below &mdash; find yours to see travel time
              and which services patients from your area request most.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            gap={0.04}
          >
            {AREA_CITIES.map((city, i) => (
              <StaggerItem key={city.slug + i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="h-full"
                >
                  <Link
                    href={areaCityUrlPath(city.slug)}
                    className="group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-5 transition-shadow hover:shadow-xl hover:shadow-brand-navy/10"
                  >
                    <h3 className="text-base font-bold text-brand-navy">
                      {city.name}, IL
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand-blue">
                      {city.county} County &middot; {city.zip}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/70">
                      About {city.distanceMiles} miles from our Geneva office
                      &mdash; roughly a {city.driveMinutes}-minute drive.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-brand-blue">
                      View services for {city.name}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-brand-ink p-10 text-white shadow-2xl shadow-brand-navy/30 sm:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-cyan/25 blur-3xl"
              />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-sky">
                  Ready when you are
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {CONSULTATION_CTA.heading}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {CONSULTATION_CTA.paragraph}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <MagneticButton>
                    <BookNowTrigger className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-brand-blue/30 transition-shadow hover:shadow-xl hover:shadow-brand-blue/50">
                      Book Appointment
                    </BookNowTrigger>
                  </MagneticButton>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
                  >
                    Call {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
