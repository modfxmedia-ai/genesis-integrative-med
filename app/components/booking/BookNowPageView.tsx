"use client";

import Link from "next/link";
import Script from "next/script";

import { Reveal } from "@/app/components/home/motion-primitives";
import { CONTACT } from "@/app/lib/site-config";

/**
 * /book-now/, dedicated page for the GHL/LeadConnector calendar booking
 * widget (form id arjP5TnMoJyvrPcTYI8Z, same widget as `CONTACT.bookingUrl`).
 * The widget self-manages its iframe height via the `embed.js` script, which
 * looks up the iframe by its `msgsndr-calendar` id and posts resize messages.
 */
export default function BookNowPageView() {
  return (
    <article className="bg-white">
      <BreadcrumbBar />
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-mist/30 to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-sky/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Schedule your visit
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-brand-ink sm:text-6xl">
              <span className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                Book Now
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-ink/70 sm:text-lg">
              Pick a day and time that works for you. Bookings are confirmed
              through our scheduling system, and our team will be in touch
              ahead of your visit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-white shadow-xl shadow-brand-navy/10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-cyan/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-blue/15 blur-3xl"
              />
              <div className="relative flex items-center justify-between border-b border-brand-line bg-gradient-to-r from-brand-mist/60 to-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white"
                  >
                    <CalendarIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">
                      Genesis Integrative Medicine
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink/50">
                      Online booking
                    </p>
                  </div>
                </div>
                <a
                  href={CONTACT.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue transition-colors hover:text-brand-navy sm:inline-flex"
                >
                  Open in new tab
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              <div className="relative min-h-[900px] bg-white">
                <iframe
                  src={CONTACT.bookingUrl}
                  allow="payment"
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="msgsndr-calendar"
                />
              </div>
            </div>
          </Reveal>
          <p className="mt-6 text-center text-sm text-brand-ink/60">
            Prefer to talk to a human? Call{" "}
            <a
              href={CONTACT.phoneHref}
              className="font-bold text-brand-navy hover:text-brand-blue"
            >
              {CONTACT.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <Script
        id="leadconnector-calendar-embed"
        src="https://link.msgsndr.com/js/embed.js"
        strategy="afterInteractive"
      />
    </article>
  );
}

function BreadcrumbBar() {
  return (
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
        <li aria-hidden className="text-brand-ink/30">
          /
        </li>
        <li
          aria-current="page"
          className="font-semibold uppercase tracking-[0.12em] text-brand-navy"
        >
          Book Now
        </li>
      </ol>
    </nav>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
