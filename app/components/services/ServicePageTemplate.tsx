"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import {
  ALL_SERVICES_LIST,
  CONSULTATION_CTA,
  INSURANCE_MISSION,
  type Highlight,
  type SectionImage,
  type ServicePageContent,
  type ServiceSection,
} from "@/app/lib/services-content";
import { CONTACT } from "@/app/lib/site-config";
import {
  MagneticButton,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/app/components/home/motion-primitives";

const EASE = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------- */
/* Main template                                                              */
/* -------------------------------------------------------------------------- */

export default function ServicePageTemplate({
  content,
}: {
  content: ServicePageContent;
}) {
  const useSidebar = content.layout === "sidebar";
  return (
    <article className="bg-white">
      <BreadcrumbBar items={content.breadcrumbs} />
      <ServiceHero content={content} />
      {content.highlights && content.highlights.length > 0 && (
        <HighlightsStrip highlights={content.highlights} />
      )}

      {useSidebar ? (
        <SidebarLayout content={content} />
      ) : (
        <SectionsRenderer sections={content.sections} />
      )}

      {content.video && <ServiceVideo video={content.video} />}

      {content.gallery && content.gallery.length > 0 && (
        <ServiceGallery images={content.gallery} />
      )}

      {content.faqs && content.faqs.length > 0 && (
        <FAQAccordion
          heading={content.faqHeading ?? "Frequently Asked Questions"}
          faqs={content.faqs}
        />
      )}

      {/* Bottom "All Services" list is skipped in sidebar layout — the sticky
          sidebar already surfaces the related links. */}
      {!useSidebar && (
        <AllServicesList currentSlug={content.slug} relatedNav={content.relatedNav} />
      )}
      <ConsultationCta />
      <InsuranceMissionBlock />
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb bar                                                             */
/* -------------------------------------------------------------------------- */

function BreadcrumbBar({
  items,
}: {
  items: readonly { name: string; item?: string }[];
}) {
  const toInternal = (href?: string): string | undefined => {
    if (!href) return undefined;
    return href.replace(/^https?:\/\/genesisintegrativemed\.com/, "") || "/";
  };
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-brand-line bg-brand-mist/60"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-3 text-xs">
        {items.map((b, i) => {
          const isLast = i === items.length - 1;
          const href = toInternal(b.item);
          return (
            <li key={`${b.name}-${i}`} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-brand-ink/30">
                  /
                </span>
              )}
              {!isLast && href ? (
                <Link
                  href={href}
                  className="font-semibold uppercase tracking-[0.12em] text-brand-ink/60 transition-colors hover:text-brand-blue"
                >
                  {b.name}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-semibold uppercase tracking-[0.12em] text-brand-navy"
                >
                  {b.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function ServiceHero({ content }: { content: ServicePageContent }) {
  const reduce = useReducedMotion();
  const { hero, featuredImage } = content;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-brand-mist/30 to-white"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-sky/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-[380px] w-[520px] rounded-full bg-brand-cyan/15 blur-3xl"
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <Stagger className="lg:col-span-7" gap={0.09} delayChildren={0.1}>
          {hero.kicker && (
            <StaggerItem>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                {hero.kicker}
              </p>
            </StaggerItem>
          )}
          <StaggerItem>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight text-brand-ink sm:text-5xl lg:text-[4.25rem]">
              <span className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan bg-clip-text text-transparent">
                {hero.h1}
              </span>
            </h1>
          </StaggerItem>
          {hero.subtitle && (
            <StaggerItem>
              <p className="mt-5 text-lg font-semibold text-brand-navy sm:text-xl">
                {hero.subtitle}
              </p>
            </StaggerItem>
          )}
          {hero.intro && (
            <StaggerItem>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-ink/75 sm:text-lg">
                {hero.intro}
              </p>
            </StaggerItem>
          )}
          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton>
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-brand-blue/30 transition-shadow hover:shadow-2xl hover:shadow-brand-blue/50"
                >
                  Schedule Consultation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/80 px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy backdrop-blur transition-colors hover:border-brand-blue/30 hover:bg-brand-mist"
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </StaggerItem>
        </Stagger>

        {featuredImage && (
          <motion.div
            className="relative lg:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-line bg-brand-ink shadow-2xl shadow-brand-navy/25">
              <motion.div
                className="relative aspect-[4/5] w-full sm:aspect-[5/6]"
                style={reduce ? undefined : { y: parallaxY, scale: parallaxScale }}
              >
                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </motion.div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-ink/60 via-brand-ink/10 to-transparent"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-brand-line bg-white/95 p-4 shadow-xl shadow-brand-navy/15 backdrop-blur md:block"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white"
                >
                  <SparkIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                    Geneva, IL
                  </p>
                  <p className="text-sm font-bold leading-tight text-brand-ink">
                    Integrative care, personalized.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Highlights strip (optional)                                                */
/* -------------------------------------------------------------------------- */

function HighlightsStrip({
  highlights,
}: {
  highlights: readonly Highlight[];
}) {
  return (
    <section className="border-y border-brand-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <Stagger
          className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          gap={0.06}
        >
          {highlights.map((h, i) => (
            <StaggerItem key={`${h.label}-${i}`}>
              <div className="group flex items-start gap-3">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 text-brand-blue transition-colors group-hover:from-brand-blue group-hover:to-brand-cyan group-hover:text-white"
                >
                  <HighlightIcon name={h.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-brand-navy">{h.label}</p>
                  {h.note && (
                    <p className="mt-1 text-xs leading-relaxed text-brand-ink/60">
                      {h.note}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Sections dispatcher                                                        */
/* -------------------------------------------------------------------------- */

function SectionsRenderer({
  sections,
}: {
  sections: readonly ServiceSection[];
}) {
  // Auto-alternate the side any *split* section renders its visual on
  // (regardless of whether it's an image or a decorative placeholder).
  let splitIdx = 0;
  return (
    <>
      {sections.map((section, i) => {
        const heavy = isContentHeavy(section);
        let side: "left" | "right" = section.imageSide ?? "right";
        if (heavy && !section.imageSide) {
          side = splitIdx % 2 === 0 ? "right" : "left";
          splitIdx += 1;
        }
        return (
          <SectionDispatcher
            key={i}
            section={section}
            imageSide={side}
            index={i}
          />
        );
      })}
    </>
  );
}

/** A section is "content-heavy" when it deserves the two-column split treatment. */
function isContentHeavy(section: ServiceSection): boolean {
  if (section.image) return true;
  if (section.kind === "list" || section.kind === "subsections" || section.kind === "benefits") {
    return true;
  }
  if (section.kind === "prose") {
    const hasHeading = !!section.heading;
    const longEnough = section.paragraphs.length >= 2;
    if (hasHeading && longEnough) return true;
  }
  return false;
}

function SectionDispatcher({
  section,
  imageSide,
  index,
}: {
  section: ServiceSection;
  imageSide: "left" | "right";
  index: number;
}) {
  // Dark-variant text-only sections render as an immersive feature strip.
  if (section.variant === "dark" && !section.image) {
    return <DarkFeatureSection section={section} />;
  }

  // Content-heavy sections use the split layout (image OR placeholder + sticky).
  if (isContentHeavy(section)) {
    const bg =
      section.variant === "dark"
        ? "dark"
        : section.variant === "mist"
          ? "mist"
          : index % 2 === 0
            ? "white"
            : "mist";
    return (
      <SplitSection
        section={section}
        imageSide={imageSide}
        bg={bg}
        index={index}
      />
    );
  }

  // Short, single-paragraph prose sections stay compact and centered.
  const bg = section.variant === "mist" ? "mist" : "white";
  return <CenteredSection section={section} bg={bg} />;
}

/* -------------------------------------------------------------------------- */
/* Sidebar layout — text left, sticky related-nav on the right                */
/* -------------------------------------------------------------------------- */

function SidebarLayout({ content }: { content: ServicePageContent }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Main content column */}
          <main className="lg:col-span-8 xl:col-span-9">
            <div className="space-y-12 sm:space-y-16">
              {content.sections.map((section, i) => (
                <LinearSection key={i} section={section} />
              ))}
            </div>
          </main>
          {/* Sticky sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:flex lg:flex-col">
              <ConditionsSidebar
                currentSlug={content.slug}
                relatedNav={content.relatedNav}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function LinearSection({ section }: { section: ServiceSection }) {
  return (
    <section>
      <SectionHeader section={section} align="left" />
      {section.image && (
        <Reveal delay={0.05}>
          <div className="mt-6 overflow-hidden rounded-3xl border border-brand-line bg-brand-ink shadow-lg shadow-brand-navy/10">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      )}
      <SectionBody section={section} />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Conditions Sidebar — the sticky right-column nav in sidebar layout        */
/* -------------------------------------------------------------------------- */

function ConditionsSidebar({
  currentSlug,
  relatedNav,
}: {
  currentSlug: string;
  relatedNav?: import("@/app/lib/services-content").RelatedNav;
}) {
  const nav = relatedNav ?? {
    kicker: "Explore",
    heading: "All Services",
    items: ALL_SERVICES_LIST,
    footerLabel: "View all",
    footerHref: "/services/",
  };
  return (
    <Reveal className="lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
      <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-lg shadow-brand-navy/10">
        {/* Header with gradient */}
        <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan px-5 py-4 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-sky">
              <span className="mr-2 inline-block h-1 w-1 -translate-y-0.5 rounded-full bg-brand-cyan" />
              {nav.kicker ?? "Explore"}
            </p>
            <h3 className="mt-1.5 text-base font-extrabold leading-tight sm:text-lg">
              {nav.heading}
            </h3>
          </div>
        </div>
        {/* Nav list — scrolls internally if the whole sidebar exceeds viewport */}
        <nav
          aria-label={nav.heading}
          className="min-h-0 flex-1 divide-y divide-brand-line overflow-y-auto"
        >
          {nav.items.map((item, i) => {
            const isCurrent = item.href.includes(`/${currentSlug}/`);
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, ease: EASE, delay: i * 0.015 }}
              >
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`group relative flex items-center justify-between gap-2 px-4 py-2.5 text-[13px] font-semibold transition-colors ${
                    isCurrent
                      ? "bg-brand-mist text-brand-navy"
                      : "text-brand-ink/75 hover:bg-brand-mist/60 hover:text-brand-navy"
                  }`}
                >
                  {isCurrent && (
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-blue to-brand-cyan"
                    />
                  )}
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span
                      aria-hidden
                      className={`inline-flex h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                        isCurrent
                          ? "bg-brand-blue"
                          : "bg-brand-ink/25 group-hover:bg-brand-blue"
                      }`}
                    />
                    <span className="truncate">{item.label}</span>
                  </span>
                  <ArrowUpRight
                    className={`h-3 w-3 shrink-0 transition-transform ${
                      isCurrent
                        ? "text-brand-blue"
                        : "text-brand-ink/40 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-blue"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>
        {/* Footer CTA — compact */}
        <div className="shrink-0 border-t border-brand-line bg-brand-mist/40 p-3">
          <a
            href={CONTACT.phoneHref}
            className="group flex items-center justify-between gap-2 rounded-xl border border-brand-line bg-white px-3 py-2 text-[13px] font-bold text-brand-navy transition-colors hover:border-brand-blue/40 hover:bg-brand-mist"
          >
            <span className="flex items-center gap-2">
              <span
                aria-hidden
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white"
              >
                <PhoneIcon className="h-3 w-3" />
              </span>
              <span>{CONTACT.phoneDisplay}</span>
            </span>
            <ArrowRight className="h-3 w-3 text-brand-blue transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/contact/"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-brand-blue/25 transition-shadow hover:shadow-lg hover:shadow-brand-blue/40"
          >
            Schedule Consultation
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* Centered text section (short prose)                                        */
/* -------------------------------------------------------------------------- */

function CenteredSection({
  section,
  bg,
}: {
  section: ServiceSection;
  bg: "white" | "mist";
}) {
  return (
    <section className={`${bg === "mist" ? "bg-brand-mist/40" : "bg-white"} py-14 sm:py-20`}>
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader section={section} />
        <SectionBody section={section} />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Split section — image OR decorative placeholder + text (image sticks)     */
/* -------------------------------------------------------------------------- */

function SplitSection({
  section,
  imageSide,
  bg,
  index,
}: {
  section: ServiceSection;
  imageSide: "left" | "right";
  bg: "white" | "mist" | "dark";
  index: number;
}) {
  const bgClass =
    bg === "dark"
      ? "bg-brand-ink text-white"
      : bg === "mist"
        ? "bg-brand-mist/50"
        : "bg-white";

  return (
    <section className={`${bgClass} py-16 sm:py-24`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16">
        {/* Visual column (image or placeholder) — pinned while text scrolls */}
        <div
          className={`lg:col-span-5 ${imageSide === "left" ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="lg:sticky lg:top-24">
            {section.image ? (
              <SectionImageBlock image={section.image} onDark={bg === "dark"} />
            ) : (
              <SectionVisualPlaceholder
                section={section}
                index={index}
                onDark={bg === "dark"}
              />
            )}
          </div>
        </div>
        {/* Content column */}
        <div
          className={`lg:col-span-7 ${imageSide === "left" ? "lg:order-2" : "lg:order-1"}`}
        >
          <SectionHeader section={section} onDark={bg === "dark"} align="left" />
          <SectionBody section={section} onDark={bg === "dark"} />
        </div>
      </div>
    </section>
  );
}

function SectionImageBlock({
  image,
  onDark,
}: {
  image: SectionImage;
  onDark: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative"
      ref={ref}
    >
      <div
        className={`relative overflow-hidden rounded-[2rem] border ${onDark ? "border-white/10" : "border-brand-line"} bg-brand-ink shadow-xl ${onDark ? "shadow-black/40" : "shadow-brand-navy/15"}`}
      >
        <motion.div
          className="relative aspect-[4/3] w-full sm:aspect-[5/4]"
          style={reduce ? undefined : { y }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
        />
      </div>
      {/* Corner accent */}
      <div
        aria-hidden
        className={`absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-3xl ${onDark ? "bg-brand-cyan/25" : "bg-brand-cyan/20"} blur-2xl md:block`}
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Decorative visual placeholder — used when a section has no photo          */
/* -------------------------------------------------------------------------- */

const PLACEHOLDER_ICONS = ["spark", "target", "heart", "bolt", "leaf", "shield"] as const;

function SectionVisualPlaceholder({
  section,
  index,
  onDark,
}: {
  section: ServiceSection;
  index: number;
  onDark: boolean;
}) {
  const reduce = useReducedMotion();
  const iconName = PLACEHOLDER_ICONS[index % PLACEHOLDER_ICONS.length];
  const heading = "heading" in section && section.heading ? section.heading : "";
  const label = heading.length > 60 ? heading.slice(0, 58).trim() + "\u2026" : heading;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="relative"
    >
      <div
        className={`relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] border shadow-xl ${
          onDark
            ? "border-white/10 bg-gradient-to-br from-brand-blue/25 via-brand-navy to-brand-ink shadow-black/40"
            : "border-brand-line bg-gradient-to-br from-brand-mist via-white to-brand-sky/25 shadow-brand-navy/10"
        }`}
      >
        {/* Dot pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: onDark
              ? "radial-gradient(circle at 1px 1px, #64B4DC 1px, transparent 0)"
              : "radial-gradient(circle at 1px 1px, #00508C 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Ambient blobs */}
        <div
          aria-hidden
          className={`pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full blur-3xl ${onDark ? "bg-brand-cyan/30" : "bg-brand-cyan/25"}`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full blur-3xl ${onDark ? "bg-brand-blue/40" : "bg-brand-blue/20"}`}
        />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
          {/* Top: kicker + heading */}
          <div>
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${onDark ? "text-brand-sky" : "text-brand-blue"}`}
            >
              <span
                className={`mr-2 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full ${onDark ? "bg-brand-cyan" : "bg-brand-cyan"}`}
              />
              Chapter {num}
            </p>
            {label && (
              <h3
                className={`mt-4 text-xl font-bold leading-tight sm:text-2xl ${onDark ? "text-white" : "text-brand-navy"}`}
              >
                {label}
              </h3>
            )}
          </div>

          {/* Middle: large gradient index number */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.span
              aria-hidden
              initial={reduce ? false : { scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
              className={`select-none font-extrabold leading-none tracking-tight ${
                onDark ? "text-white/[0.08]" : "text-brand-navy/[0.07]"
              }`}
              style={{ fontSize: "clamp(6rem, 18vw, 12rem)" }}
            >
              {num}
            </motion.span>
          </div>

          {/* Bottom: icon badge */}
          <div className="relative flex items-center justify-between">
            <span
              aria-hidden
              className={`flex h-14 w-14 items-center justify-center rounded-2xl backdrop-blur ${
                onDark
                  ? "bg-white/10 text-brand-cyan"
                  : "bg-white/80 text-brand-blue shadow-md shadow-brand-navy/10"
              }`}
            >
              <HighlightIcon name={iconName} className="h-6 w-6" />
            </span>
            <div
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] ${
                onDark
                  ? "bg-white/10 text-brand-sky"
                  : "bg-white/80 text-brand-navy shadow-md shadow-brand-navy/10"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${onDark ? "bg-brand-cyan" : "bg-brand-blue"}`}
              />
              Genesis
            </div>
          </div>
        </div>

        {/* Inner ring */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ${onDark ? "ring-white/10" : "ring-white/50"}`}
        />
      </div>
      {/* Corner accent */}
      <div
        aria-hidden
        className={`absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-3xl ${onDark ? "bg-brand-cyan/25" : "bg-brand-cyan/20"} blur-2xl md:block`}
      />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Dark feature section (text-only)                                           */
/* -------------------------------------------------------------------------- */

function DarkFeatureSection({ section }: { section: ServiceSection }) {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[600px] rounded-full bg-brand-blue/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-[380px] w-[520px] rounded-full bg-brand-cyan/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #64B4DC 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <SectionHeader section={section} onDark align="center" />
        <SectionBody section={section} onDark />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section header (heading + kicker + intro paragraph)                        */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  section,
  onDark = false,
  align = "left",
}: {
  section: ServiceSection;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  const showKicker = section.kicker;
  const showHeading = "heading" in section && section.heading;
  const showIntro =
    (section.kind === "list" || section.kind === "subsections") && section.intro;

  if (!showKicker && !showHeading && !showIntro) return null;

  return (
    <div
      className={`${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {showKicker && (
        <Reveal>
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${onDark ? "text-brand-sky" : "text-brand-blue"}`}
          >
            <span
              className={`mr-2 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full ${onDark ? "bg-brand-cyan" : "bg-brand-cyan"}`}
            />
            {section.kicker}
          </p>
        </Reveal>
      )}
      {showHeading && (
        <Reveal delay={showKicker ? 0.05 : 0}>
          <h2
            className={`${showKicker ? "mt-3" : ""} text-3xl font-bold tracking-tight sm:text-4xl ${onDark ? "text-white" : "text-brand-navy"}`}
          >
            {"heading" in section ? section.heading : ""}
          </h2>
        </Reveal>
      )}
      {showIntro && (
        <Reveal delay={showHeading ? 0.1 : 0.05}>
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${onDark ? "text-white/80" : "text-brand-ink/75"}`}
          >
            {"intro" in section ? section.intro : ""}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Section body — dispatches on kind                                          */
/* -------------------------------------------------------------------------- */

function SectionBody({
  section,
  onDark = false,
}: {
  section: ServiceSection;
  onDark?: boolean;
}) {
  switch (section.kind) {
    case "prose":
      return <ProseBody section={section} onDark={onDark} />;
    case "list":
      return <ListBody section={section} onDark={onDark} />;
    case "subsections":
      return <SubsectionsBody section={section} onDark={onDark} />;
    case "benefits":
      return <BenefitsBody section={section} onDark={onDark} />;
  }
}

function ProseBody({
  section,
  onDark,
}: {
  section: Extract<ServiceSection, { kind: "prose" }>;
  onDark: boolean;
}) {
  const hasHeader = section.kicker || section.heading;
  return (
    <Stagger
      className={`${hasHeader ? "mt-5" : ""} space-y-4 text-base leading-relaxed sm:text-lg ${onDark ? "text-white/80" : "text-brand-ink/80"}`}
      gap={0.08}
    >
      {section.paragraphs.map((p, i) => (
        <StaggerItem key={i}>
          <p>{p}</p>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function ListBody({
  section,
  onDark,
}: {
  section: Extract<ServiceSection, { kind: "list" }>;
  onDark: boolean;
}) {
  return (
    <>
      <Stagger className="mt-6 space-y-3" gap={0.06}>
        {section.items.map((item, i) => (
          <StaggerItem key={i}>
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ duration: 0.25, ease: EASE }}
              className={`flex items-start gap-3 rounded-2xl border p-4 transition-colors ${
                onDark
                  ? "border-white/10 bg-white/[0.03] hover:border-brand-cyan/30 hover:bg-white/[0.06]"
                  : "border-brand-line bg-brand-mist/40 hover:border-brand-blue/25 hover:bg-brand-mist/70"
              }`}
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-md shadow-brand-blue/25"
              >
                <CheckIcon className="h-3 w-3" />
              </span>
              <span
                className={`text-sm leading-relaxed sm:text-base ${onDark ? "text-white/85" : "text-brand-ink/85"}`}
              >
                {item}
              </span>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
      {section.outro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${onDark ? "text-white/80" : "text-brand-ink/80"}`}
          >
            {section.outro}
          </p>
        </Reveal>
      )}
    </>
  );
}

function SubsectionsBody({
  section,
  onDark,
}: {
  section: Extract<ServiceSection, { kind: "subsections" }>;
  onDark: boolean;
}) {
  return (
    <div className="mt-10 space-y-6">
      {section.subs.map((sub, i) => (
        <Reveal key={i} delay={i * 0.04}>
          <div
            className={`group relative overflow-hidden rounded-3xl border p-6 transition-all sm:p-8 ${
              onDark
                ? "border-white/10 bg-white/[0.04] hover:border-brand-cyan/25"
                : "border-brand-line bg-white hover:border-brand-blue/25 hover:shadow-lg hover:shadow-brand-navy/5"
            }`}
          >
            {/* Left rail accent */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-brand-blue to-brand-cyan transition-transform duration-500 group-hover:scale-y-100"
            />
            <div className="flex items-baseline gap-4">
              <span
                aria-hidden
                className={`shrink-0 font-mono text-xs font-bold tabular-nums ${onDark ? "text-brand-sky" : "text-brand-blue"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`text-xl font-bold sm:text-2xl ${onDark ? "text-white" : "text-brand-navy"}`}
              >
                {sub.heading}
              </h3>
            </div>
            {sub.paragraphs?.map((p, pi) => (
              <p
                key={pi}
                className={`mt-3 text-sm leading-relaxed sm:text-base ${onDark ? "text-white/75" : "text-brand-ink/80"}`}
              >
                {p}
              </p>
            ))}
            {sub.items && sub.items.length > 0 && (
              <ul className="mt-4 space-y-2">
                {sub.items.map((it, ii) => (
                  <li
                    key={ii}
                    className={`flex items-start gap-2.5 text-sm leading-relaxed sm:text-base ${onDark ? "text-white/75" : "text-brand-ink/80"}`}
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}
            {sub.outro && (
              <p
                className={`mt-4 text-sm leading-relaxed sm:text-base ${onDark ? "text-white/75" : "text-brand-ink/80"}`}
              >
                {sub.outro}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function BenefitsBody({
  section,
  onDark,
}: {
  section: Extract<ServiceSection, { kind: "benefits" }>;
  onDark: boolean;
}) {
  return (
    <Stagger
      className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
      gap={0.06}
    >
      {section.subs.map((sub, i) => (
        <StaggerItem key={i}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition-shadow ${
              onDark
                ? "border-white/10 bg-white/[0.04] hover:border-brand-cyan/30 hover:shadow-xl hover:shadow-black/40"
                : "border-brand-line bg-white hover:shadow-xl hover:shadow-brand-navy/10"
            }`}
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-cyan transition-transform duration-500 group-hover:scale-x-100"
            />
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/30"
              >
                <span className="text-sm font-bold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3
                className={`text-lg font-bold ${onDark ? "text-white" : "text-brand-navy"}`}
              >
                {sub.heading}
              </h3>
            </div>
            <p
              className={`mt-4 text-sm leading-relaxed ${onDark ? "text-white/75" : "text-brand-ink/75"}`}
            >
              {sub.paragraph}
            </p>
          </motion.div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/* -------------------------------------------------------------------------- */
/* Video embed                                                                */
/* -------------------------------------------------------------------------- */

function ServiceVideo({
  video,
}: {
  video: NonNullable<ServicePageContent["video"]>;
}) {
  const src =
    video.provider === "vimeo"
      ? `https://player.vimeo.com/video/${video.id}?dnt=1&title=0&byline=0&portrait=0`
      : `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`;
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          {video.kicker && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              {video.kicker}
            </p>
          )}
          {video.heading && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              {video.heading}
            </h2>
          )}
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-brand-line bg-brand-ink shadow-2xl shadow-brand-navy/25">
            <div className="relative aspect-video w-full">
              <iframe
                src={src}
                title={video.title}
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Gallery                                                                    */
/* -------------------------------------------------------------------------- */

function ServiceGallery({
  images,
}: {
  images: readonly SectionImage[];
}) {
  return (
    <section className="bg-brand-mist py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
            In our clinic
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Recovery, personalized.
          </h2>
        </Reveal>
        <Stagger
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.07}
        >
          {images.map((img, i) => (
            <StaggerItem key={img.src + i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`group relative overflow-hidden rounded-3xl bg-brand-ink shadow-lg shadow-brand-navy/10 ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-[5/4]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent"
                />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ accordion                                                              */
/* -------------------------------------------------------------------------- */

function FAQAccordion({
  heading,
  faqs,
}: {
  heading: string;
  faqs: readonly { question: string; answer: string }[];
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Frequently asked
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
        <Stagger className="mt-12 space-y-3" gap={0.05}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <FAQItem faq={faq} defaultOpen={i === 0} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  defaultOpen,
}: {
  faq: { question: string; answer: string };
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white transition-colors ${
        open ? "border-brand-blue/30 shadow-md shadow-brand-navy/5" : "border-brand-line hover:border-brand-blue/25"
      }`}
    >
      <div
        aria-hidden
        className={`absolute inset-y-0 left-0 w-1 origin-top bg-gradient-to-b from-brand-blue to-brand-cyan transition-transform duration-300 ${open ? "scale-y-100" : "scale-y-0"}`}
      />
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-bold text-brand-navy sm:text-lg">
          {faq.question}
        </span>
        <span
          aria-hidden
          className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-brand-blue transition-all ${
            open ? "rotate-45 border-brand-blue/30 bg-brand-mist" : "border-brand-line"
          }`}
        >
          <PlusIcon className="h-3.5 w-3.5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-brand-ink/80 sm:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Related pages list (defaults to "All Services")                            */
/* -------------------------------------------------------------------------- */

function AllServicesList({
  currentSlug,
  relatedNav,
}: {
  currentSlug: string;
  relatedNav?: import("@/app/lib/services-content").RelatedNav;
}) {
  const nav = relatedNav ?? {
    kicker: "Explore",
    heading: "All Services",
    items: ALL_SERVICES_LIST,
    footerLabel: "View services overview",
    footerHref: "/services/",
  };
  const items = nav.items.filter(
    (s) => !s.href.includes(`/${currentSlug}/`)
  );
  return (
    <section className="relative overflow-hidden bg-brand-mist py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[500px] rounded-full bg-brand-sky/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
            {nav.kicker ?? "Explore"}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            {nav.heading}
          </h2>
        </Reveal>
        <Stagger
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          gap={0.04}
        >
          {items.map((s) => (
            <StaggerItem key={s.href}>
              <Link
                href={s.href}
                className="group flex items-center justify-between rounded-2xl border border-brand-line bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-md hover:shadow-brand-navy/5"
              >
                <span className="text-sm font-bold text-brand-navy">
                  {s.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-brand-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        {nav.footerHref && nav.footerLabel && (
          <Reveal delay={0.1} className="mt-10 flex justify-center">
            <MagneticButton strength={14}>
              <Link
                href={nav.footerHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:border-brand-blue hover:bg-brand-navy hover:text-white"
              >
                {nav.footerLabel}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </MagneticButton>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Consultation CTA                                                           */
/* -------------------------------------------------------------------------- */

function ConsultationCta() {
  return (
    <section className="bg-white py-16 sm:py-24">
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
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #64B4DC 1px, transparent 0)",
                backgroundSize: "34px 34px",
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-sky">
                  Ready when you are
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {CONSULTATION_CTA.heading}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {CONSULTATION_CTA.paragraph}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                <MagneticButton>
                  <a
                    href={CONTACT.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-brand-blue/30 transition-shadow hover:shadow-xl hover:shadow-brand-blue/50"
                  >
                    Book Appointment
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </MagneticButton>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-brand-cyan/40 hover:bg-white/[0.08]"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  Call {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Insurance mission block                                                    */
/* -------------------------------------------------------------------------- */

function InsuranceMissionBlock() {
  return (
    <section className="border-t border-brand-line bg-brand-mist/50 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Coverage
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
  );
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                       */
/* -------------------------------------------------------------------------- */

function HighlightIcon({
  name,
  ...props
}: { name?: Highlight["icon"] } & React.SVGProps<SVGSVGElement>) {
  switch (name) {
    case "spark":
      return <SparkIcon {...props} />;
    case "shield":
      return <ShieldIcon {...props} />;
    case "heart":
      return <HeartIcon {...props} />;
    case "clock":
      return <ClockIcon {...props} />;
    case "bolt":
      return <BoltIcon {...props} />;
    case "leaf":
      return <LeafIcon {...props} />;
    case "target":
      return <TargetIcon {...props} />;
    case "check":
    default:
      return <CheckIcon {...props} />;
  }
}

function baseIconProps(): React.SVGProps<SVGSVGElement> {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} strokeWidth={3} {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} strokeWidth={2.5} {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SparkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <path d="M11 20A7 7 0 0 1 4 13V6a4 4 0 0 1 4-4h5a7 7 0 0 1 7 7v3a7 7 0 0 1-7 7z" />
      <path d="M4 20L20 4" />
    </svg>
  );
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseIconProps()} {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
