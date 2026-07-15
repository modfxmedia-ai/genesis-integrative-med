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
import { CONTACT } from "@/app/lib/site-config";
import { CONSULTATION_CTA, INSURANCE_MISSION } from "@/app/lib/services-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export type TeamMember = {
  name: string;
  title: string;
  image: { src: string; alt: string; width: number; height: number };
  bio?: readonly string[];
};

export type TeamPageProps = {
  breadcrumb: readonly { label: string; href?: string }[];
  kicker?: string;
  h1: string;
  sectionKicker?: string;
  sectionHeading?: string;
  intro?: string;
  members: readonly TeamMember[];
};

export default function TeamPageView({
  breadcrumb,
  kicker,
  h1,
  sectionKicker,
  sectionHeading,
  intro,
  members,
}: TeamPageProps) {
  return (
    <article className="bg-white">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-brand-line bg-brand-mist/60"
      >
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-3 text-xs">
          {breadcrumb.map((b, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <li key={`${b.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden className="text-brand-ink/30">/</span>
                )}
                {!isLast && b.href ? (
                  <Link
                    href={b.href}
                    className="font-semibold uppercase tracking-[0.12em] text-brand-ink/60 transition-colors hover:text-brand-blue"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="font-semibold uppercase tracking-[0.12em] text-brand-navy"
                  >
                    {b.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-mist/30 to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-sky/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #00508C 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          {kicker && (
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                {kicker}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                {h1}
              </span>
            </h1>
          </Reveal>
          {sectionHeading && (
            <Reveal delay={0.1}>
              <p className="mt-6 text-xl font-semibold text-brand-navy sm:text-2xl">
                {sectionHeading}
              </p>
            </Reveal>
          )}
          {intro && (
            <Reveal delay={0.15}>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {sectionKicker && (
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                {sectionKicker}
              </p>
            </Reveal>
          )}
          <Stagger
            className="mt-10 space-y-14 sm:space-y-20"
            gap={0.09}
          >
            {members.map((member, i) => (
              <StaggerItem key={`${member.name}-${i}`}>
                <MemberCard member={member} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-brand-ink p-10 text-white shadow-2xl shadow-brand-navy/30 sm:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-cyan/25 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl"
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
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-brand-blue/30 transition-shadow hover:shadow-xl hover:shadow-brand-blue/50"
                    >
                      Book Appointment
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

      {/* Mission */}
      <section className="border-t border-brand-line bg-brand-mist/50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Our mission
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
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

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const imageOnRight = index % 2 === 0;
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`lg:col-span-5 ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="relative mx-auto max-w-md">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/15 to-brand-cyan/15 blur-xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-brand-ink shadow-xl shadow-brand-navy/15">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={member.image.src}
                alt={member.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-ink/30 to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Text */}
      <div className={`lg:col-span-7 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}>
        <Reveal>
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-[11px] font-bold text-white shadow-md shadow-brand-blue/25"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            {member.name}
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
            {member.title}
          </p>
        </Reveal>
        {member.bio && member.bio.length > 0 && (
          <Stagger
            className="mt-6 space-y-4 text-base leading-relaxed text-brand-ink/80 sm:text-lg"
            gap={0.07}
          >
            {member.bio.map((p, i) => (
              <StaggerItem key={i}>
                <p>{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </div>
  );
}
