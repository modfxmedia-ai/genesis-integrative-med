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
import {
  AREA_TOPICS,
  areaComboUrlPath,
  type AreaCity,
} from "@/app/lib/areas-we-serve-content";
import { CONSULTATION_CTA } from "@/app/lib/services-content";
import { CONTACT } from "@/app/lib/site-config";

/**
 * /areas-we-serve/[city]/ hub: real local facts for the city + links to
 * every service/condition topic page available for that city.
 */
export default function AreaCityHubView({ city }: { city: AreaCity }) {
  return (
    <article className="bg-white">
      <nav
        aria-label="Breadcrumb"
        className="border-b border-brand-line bg-brand-mist/60"
      >
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-3 text-xs">
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
          <li>
            <Link
              href="/areas-we-serve/"
              className="font-semibold uppercase tracking-[0.12em] text-brand-ink/60 transition-colors hover:text-brand-blue"
            >
              Areas We Serve
            </Link>
          </li>
          <li aria-hidden className="text-brand-ink/30">
            /
          </li>
          <li
            aria-current="page"
            className="font-semibold uppercase tracking-[0.12em] text-brand-navy"
          >
            {city.name}
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
              {city.county} County, IL
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                Care for {city.name}, IL Patients
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
              Genesis Integrative Medicine's Geneva office is about{" "}
              {city.distanceMiles} miles from {city.name} &mdash; roughly a{" "}
              {city.driveMinutes}-minute drive from {city.landmark}. Below are
              the treatments {city.name} patients ask about most.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton>
                <BookNowTrigger className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-brand-blue/25 transition-shadow hover:shadow-xl hover:shadow-brand-blue/40">
                  Book Appointment
                </BookNowTrigger>
              </MagneticButton>
              <a
                href={CONTACT.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:border-brand-blue/30 hover:bg-brand-mist"
              >
                Get Directions from {city.name}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Available to {city.name} patients
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Treatments &amp; Conditions We Treat
            </h2>
          </Reveal>
          <Stagger
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            gap={0.05}
          >
            {AREA_TOPICS.map((topic, i) => (
              <StaggerItem key={topic.slug + i}>
                <motion.div whileHover={{ y: -4 }} className="h-full">
                  <Link
                    href={areaComboUrlPath(city.slug, topic.slug)}
                    className="group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-brand-navy/10"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                      {topic.parentSection}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-brand-navy">
                      {topic.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/70">
                      For {city.name} patients &mdash; about{" "}
                      {city.driveMinutes} minutes from our Geneva office.
                    </p>
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
