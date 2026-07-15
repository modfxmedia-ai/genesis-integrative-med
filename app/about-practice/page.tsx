import type { Metadata } from "next";
import Link from "next/link";

import {
  MagneticButton,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/app/components/home/motion-primitives";
import { CONTACT } from "@/app/lib/site-config";
import { CONSULTATION_CTA, INSURANCE_MISSION } from "@/app/lib/services-content";

const CANONICAL = "https://genesisintegrativemed.com/about-practice/";

export const metadata: Metadata = {
  title: "Our Approach to Holistic Healing & Medicine in Geneva, IL",
  description:
    "Discover how Genesis Integrative Medicine changes lives every day in Geneva, IL. We focus on fixing the source of your discomfort. Join our healthy community.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    title: "Our Approach to Holistic Healing & Medicine in Geneva, IL",
    description:
      "Discover how Genesis Integrative Medicine changes lives every day in Geneva, IL. We focus on fixing the source of your discomfort. Join our healthy community.",
    url: CANONICAL,
    siteName: "Genesis Integrative Medicine",
    images: [
      {
        url: "https://genesisintegrativemed.com/wp-content/uploads/bb-plugin/cache/team-member1-circle.webp",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach to Holistic Healing & Medicine in Geneva, IL",
    description:
      "Discover how Genesis Integrative Medicine changes lives every day in Geneva, IL. We focus on fixing the source of your discomfort. Join our healthy community.",
  },
};

const BODY_PARAGRAPHS = [
  "Genesis Integrative Medicine takes an approach to health care designed to solve an age-old problem for patients \u2014 too many doctors and a lack of communication between them. At Genesis Integrative Medicine, patients in Geneva, Illinois, have access to both traditional medical services and alternative therapies like chiropractic care for a variety of conditions, all under the same roof. The result is a cutting-edge, integrated solution to health care and disease prevention with experienced and skilled providers who work together to ensure optimum health.",
  "The team at Genesis Integrative Medicine features health providers who are board-certified in many areas of health care to provide the highest quality of care. Using an integrative approach, the compassionate staff is well-equipped to address issues like chronic joint pain, neck pain, back pain, and migraines, often without relying on medications or the need for surgery.",
  "In an effort to expand its services, Genesis Integrative Medicine has combined the latest treatment options, like platelet-rich plasma (PRP) therapy, regenerative medicine, and cold laser therapy, with traditional active rehab and chiropractic care. The goal of this integrative approach is to address chronic pain and mobility issues while enhancing their patients\u2019 overall quality of life.",
  "In addition to the advanced technologies available, the Genesis Integrative Medicine team also provides services to help patients enhance and maintain good physical, mental, and emotional health through on-site allergy testing, weight loss programs, and IV nutrition therapy.",
  "Rather than treat every ill with a pill, consider the benefits of an integrative approach to achieving a happy, pain-free life.",
];

const SITE_ORIGIN = "https://genesisintegrativemed.com";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": CANONICAL,
        url: CANONICAL,
        name: "Our Approach to Holistic Healing & Medicine in Geneva, IL",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        datePublished: "2022-07-21T00:00:00+00:00",
        dateModified: "2026-04-09T09:28:17+00:00",
        description:
          "Discover how Genesis Integrative Medicine changes lives every day in Geneva, IL. We focus on fixing the source of your discomfort. Join our healthy community.",
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "About Us" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: "Genesis Integrative Medicine",
        inLanguage: "en-US",
      },
    ],
  },
];

export default function AboutPracticePage() {
  return (
    <>
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
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
              About Us
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
                About Our Practice
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                  About Us
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-xl font-semibold text-brand-navy sm:text-2xl">
                Genesis Integrative Medicine
              </p>
            </Reveal>
          </div>
        </section>

        {/* Body copy */}
        <section className="bg-white pb-16 sm:pb-24">
          <div className="mx-auto max-w-3xl px-6">
            <Stagger className="space-y-6 text-base leading-relaxed text-brand-ink/80 sm:text-lg" gap={0.08}>
              {BODY_PARAGRAPHS.map((p, i) => (
                <StaggerItem key={i}>
                  <p>{p}</p>
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
    </>
  );
}
