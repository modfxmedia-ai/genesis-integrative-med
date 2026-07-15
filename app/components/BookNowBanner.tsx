"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { CONTACT } from "@/app/lib/site-config";

/**
 * Sticky "Book Now" banner — slides up from the bottom after the user scrolls
 * past the hero. Dismissable for the current session. Persistent across all
 * pages via the root layout.
 */
export default function BookNowBanner() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // Honor per-session dismissal
    try {
      if (sessionStorage.getItem("gim-book-banner-dismissed") === "1") return;
    } catch {
      // sessionStorage may be unavailable; ignore
    }
    setDismissed(false);
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("gim-book-banner-dismissed", "1");
    } catch {
      // ignore
    }
  };

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="complementary"
          aria-label="Book an appointment"
          initial={reduce ? false : { y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="pointer-events-auto mx-auto flex max-w-6xl px-3 sm:px-6">
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-brand-line bg-white/95 shadow-2xl shadow-brand-navy/25 backdrop-blur-md">
              {/* Gradient accent hairline */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan"
              />

              <div className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4">
                {/* Icon badge */}
                <span
                  aria-hidden
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-md shadow-brand-blue/25 sm:flex"
                >
                  <CalendarPulseIcon className="h-5 w-5" />
                </span>

                {/* Copy */}
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                    Ready to feel better?
                  </p>
                  <p className="mt-0.5 truncate text-sm font-bold leading-tight text-brand-navy">
                    Book your appointment — same-week availability
                  </p>
                </div>

                {/* Phone (desktop only) */}
                <a
                  href={CONTACT.phoneHref}
                  className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-brand-line px-3.5 py-2 text-xs font-bold text-brand-navy transition-colors hover:border-brand-blue/30 hover:bg-brand-mist md:inline-flex"
                >
                  <PhoneIcon className="h-3.5 w-3.5 text-brand-blue" />
                  {CONTACT.phoneDisplay}
                </a>

                {/* Primary CTA */}
                <a
                  href={CONTACT.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-brand-blue/25 transition-shadow hover:shadow-lg hover:shadow-brand-blue/40"
                >
                  Book Now
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>

                {/* Dismiss */}
                <button
                  type="button"
                  aria-label="Dismiss banner"
                  onClick={dismiss}
                  className="ml-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-ink/50 transition-colors hover:bg-brand-mist hover:text-brand-navy"
                >
                  <XCloseIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                       */
/* -------------------------------------------------------------------------- */

function CalendarPulseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 15l2 2 4-4" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function XCloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
