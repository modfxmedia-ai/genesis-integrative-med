"use client";

import { Reveal } from "@/app/components/home/motion-primitives";

/**
 * Reusable "beautiful" wrapper for the LeadConnectorHQ intake iframe.
 *
 * Renders a header strip (icon + label + status pill), the iframe itself,
 * and an SSL/confidential/no-spam trust footer. Consumers pick the form
 * URL, height, and header label — the visual frame stays identical across
 * pages so the intake experience feels consistent from the homepage to
 * the /contact/ page.
 */
export type ContactFormEmbedProps = {
  /** LeadConnectorHQ widget URL (e.g. .../widget/form/<FORM_ID>). */
  src: string;
  /** Iframe `title` attribute (used by screen readers). */
  title: string;
  /** Rendered iframe height in pixels. Live "Website Form" = 860, "Contact Us!" = 780. */
  height?: number;
  /** Kicker above the header label. */
  kicker?: string;
  /** Primary header label ("Website Form", "Send a message"). */
  label?: string;
  /** Small secondary line under the label. */
  sublabel?: string;
  /** Optional status pill on the right (defaults to "Online"). */
  statusLabel?: string;
};

export default function ContactFormEmbed({
  src,
  title,
  height = 860,
  kicker,
  label = "Website Form",
  sublabel = "Secure intake",
  statusLabel = "Online",
}: ContactFormEmbedProps) {
  return (
    <Reveal delay={0.05}>
      <div className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-white shadow-xl shadow-brand-navy/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-cyan/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-blue/15 blur-3xl"
        />
        {/* Header strip */}
        <div className="relative flex items-center justify-between gap-4 border-b border-brand-line bg-gradient-to-r from-brand-mist/60 to-white px-6 py-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-blue text-white shadow-md shadow-brand-blue/25"
            >
              <MessageIcon className="h-5 w-5" />
            </span>
            <div>
              {kicker && (
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {kicker}
                </p>
              )}
              <p className="text-sm font-bold text-brand-navy">{label}</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-ink/50">
                {sublabel}
              </p>
            </div>
          </div>
          <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700 sm:inline-flex">
            <span aria-hidden className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {statusLabel}
          </span>
        </div>

        {/* Iframe */}
        <div className="relative bg-white">
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="block w-full border-0"
            style={{ height: `${height}px` }}
            scrolling="yes"
          />
        </div>

        {/* Trust footer */}
        <div className="relative flex flex-wrap items-center gap-4 border-t border-brand-line bg-brand-mist/30 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-ink/60">
          <span className="flex items-center gap-1.5">
            <LockIcon className="h-3 w-3 text-brand-blue" />
            SSL encrypted
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="h-3 w-3 text-brand-blue" />
            Confidential
          </span>
          <span className="flex items-center gap-1.5">
            <SparkleIcon className="h-3 w-3 text-brand-blue" />
            No spam, ever
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* Icons (self-contained so the component has zero cross-file dependencies)   */
/* -------------------------------------------------------------------------- */

function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v9a2.5 2.5 0 0 1-2.5 2.5H10l-4 3v-3H6.5A2.5 2.5 0 0 1 4 15.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="5"
        y="10"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 10V7a4 4 0 1 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m5 12 4 4 10-10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3.5 3.5M14.5 14.5 18 18M6 18l3.5-3.5M14.5 9.5 18 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
