"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import {
  MagneticButton,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/app/components/home/motion-primitives";
import {
  ALL_SERVICES_LIST,
  CONSULTATION_CTA,
  INSURANCE_MISSION,
  SERVICES_INDEX_CARDS,
  SERVICES_INDEX_HERO,
} from "@/app/lib/services-content";
import { CONTACT } from "@/app/lib/site-config";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * /services/ index — hero + featured services grid + consultation CTA + mission.
 * Renders the same 11 cards from the live site with verbatim descriptions.
 */
export default function ServicesIndexView() {
  return (
    <article className="bg-white">
      {/* Breadcrumb */}
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
          <li aria-hidden className="text-brand-ink/30">/</li>
          <li aria-current="page" className="font-semibold uppercase tracking-[0.12em] text-brand-navy">
            Services
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-sky/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #00508C 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-brand-cyan" />
              {SERVICES_INDEX_HERO.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                {SERVICES_INDEX_HERO.h1}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
              {SERVICES_INDEX_HERO.intro}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton>
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-brand-blue/25 transition-shadow hover:shadow-xl hover:shadow-brand-blue/40"
                >
                  Schedule Consultation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </MagneticButton>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:border-brand-blue/30 hover:bg-brand-mist"
              >
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured services grid */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              What we offer
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Our Featured Services
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
            {SERVICES_INDEX_CARDS.map((card, i) => (
              <StaggerItem key={card.title + i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="group h-full"
                >
                  <Link
                    href={card.href}
                    className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-shadow hover:shadow-xl hover:shadow-brand-navy/10"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-brand-ink">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        quality={92}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-brand-ink/10 to-transparent"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-cyan transition-transform duration-500 group-hover:scale-x-100"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold text-brand-navy">{card.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/70">
                        {card.body}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue transition-colors group-hover:text-brand-navy">
                        Learn more
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Overflow "view all" list */}
          <Reveal delay={0.15}>
            <div className="mt-12 rounded-3xl border border-brand-line bg-brand-mist/50 p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Also available
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {ALL_SERVICES_LIST.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:border-brand-blue/30 hover:bg-brand-mist"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-line bg-brand-ink p-8 text-white shadow-2xl shadow-brand-navy/25 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-cyan/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl"
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
                    <a
                      href={CONTACT.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-brand-blue/25 transition-shadow hover:shadow-xl hover:shadow-brand-blue/40"
                    >
                      Book Appointment
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </MagneticButton>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-brand-cyan/40 hover:bg-white/[0.08]"
                  >
                    Call {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-t border-brand-line bg-brand-mist/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Our mission
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              {INSURANCE_MISSION.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-ink/75 sm:text-base">
              {INSURANCE_MISSION.paragraph}
            </p>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
