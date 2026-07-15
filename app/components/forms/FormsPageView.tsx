"use client";

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

/**
 * /forms/ — patient paperwork hub linking to the live JotForm HIPAA-hosted forms.
 *
 * Note: keeps external hrefs intact so the paperwork itself is never broken by
 * the migration. Every link opens on jotform.com in a new tab.
 */

const FORMS = [
  {
    title: "New Patient Paperwork",
    description:
      "Complete before your first visit to speed up check-in. Includes intake, medical history, and consent forms.",
    href: "https://hipaa.jotform.com/222406266378156",
    accent: "from-brand-blue to-brand-cyan",
    tag: "Adults",
  },
  {
    title: "New Patient (Minor) Paperwork",
    description:
      "For patients under 18. A parent or legal guardian must complete and sign the intake before treatment.",
    href: "https://hipaa.jotform.com/222276765599069",
    accent: "from-brand-navy to-brand-blue",
    tag: "Minors",
  },
  {
    title: "Weight Loss Paperwork",
    description:
      "Required for anyone starting the Genesis Medical Weight Loss Program \u2014 medical history and program consent.",
    href: "https://hipaa.jotform.com/222234144681046",
    accent: "from-brand-cyan to-brand-sky",
    tag: "Program",
  },
  {
    title: "Knee Pain Paperwork",
    description:
      "For patients coming in for a knee pain consultation \u2014 helps our team tailor the exam to your history.",
    href: "https://hipaa.jotform.com/222227728722153",
    accent: "from-brand-blue to-brand-navy",
    tag: "Specific",
  },
] as const;

export default function FormsPageView() {
  return (
    <article className="bg-white">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-brand-line bg-brand-mist/60">
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
            Forms
          </li>
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
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Patient Forms
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                Forms
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
              Get a head start on your appointment by filling out any relevant paperwork below.
              Each form is hosted securely on JotForm with HIPAA compliance and opens in a new tab.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Forms grid */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2" gap={0.08}>
            {FORMS.map((f) => (
              <StaggerItem key={f.href}>
                <motion.a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-brand-line bg-white p-7 shadow-md shadow-brand-navy/5 transition-shadow hover:shadow-xl hover:shadow-brand-navy/10"
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${f.accent} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-md`}
                      >
                        <FormIcon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-brand-line bg-brand-mist/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-navy">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-ink/75 sm:text-base">
                      {f.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-brand-line pt-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                      Open on JotForm
                    </span>
                    <span
                      aria-hidden
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mist text-brand-blue transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-brand-blue group-hover:text-white"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Security note */}
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-brand-line bg-brand-mist/40 p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm"
                >
                  <ShieldIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy">
                    Secure &amp; HIPAA-compliant
                  </p>
                  <p className="text-xs text-brand-ink/60">
                    All forms are hosted on JotForm&rsquo;s HIPAA infrastructure. Your information stays private.
                  </p>
                </div>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:border-brand-blue/40 hover:bg-brand-mist"
              >
                Need help? Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </Reveal>
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

/* Icons ------------------------------------------------------------------- */

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function FormIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
