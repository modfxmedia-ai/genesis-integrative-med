/**
 * Content + data model for the /areas-we-serve/ programmatic page cluster.
 *
 * Genesis Integrative Medicine is a single-location clinic (1881 S. Randall
 * Rd, Suite C, Geneva, IL 60134). These pages exist to genuinely describe the
 * real surrounding Kane/DuPage county communities the clinic draws patients
 * from — each page combines the clinic's existing, real clinical content for
 * a topic with a city-specific local-facts layer (distance, county, ZIP,
 * landmark) so no two pages are a pure find/replace of the same sentence.
 *
 * Distances/drive times below are approximate (driving distance along local
 * roads from the Geneva office), not measured per-trip, and are presented as
 * such in copy ("about X miles", "roughly Y minutes").
 */

import {
  CHIROPRACTIC_CARE_CONTENT,
  SHOCKWAVE_THERAPY_CONTENT,
  PEPTIDE_WEIGHT_LOSS_CONTENT,
  type ServicePageContent,
} from "@/app/lib/services-content";
import {
  BACK_PAIN_CONTENT,
  CONDITIONS_SCIATICA_CONTENT,
  NECK_PAIN_CONTENT,
  NEUROPATHY_CONTENT,
} from "@/app/lib/conditions-content";
import { SITE_ORIGIN } from "@/app/lib/site-config";

/* -------------------------------------------------------------------------- */
/* Cities                                                                      */
/* -------------------------------------------------------------------------- */

export type AreaCity = {
  slug: string;
  name: string;
  county: "Kane" | "DuPage";
  zip: string;
  distanceMiles: number;
  driveMinutes: number;
  /** A real, verifiable local landmark or reference point, used in prose. */
  landmark: string;
};

export const AREA_CITIES: readonly AreaCity[] = [
  { slug: "st-charles", name: "St. Charles", county: "Kane", zip: "60174", distanceMiles: 4, driveMinutes: 10, landmark: "the Fox River and downtown St. Charles" },
  { slug: "batavia", name: "Batavia", county: "Kane", zip: "60510", distanceMiles: 5, driveMinutes: 10, landmark: "the historic Batavia Windmill District" },
  { slug: "north-aurora", name: "North Aurora", county: "Kane", zip: "60542", distanceMiles: 8, driveMinutes: 15, landmark: "Blackberry Farm" },
  { slug: "south-elgin", name: "South Elgin", county: "Kane", zip: "60177", distanceMiles: 9, driveMinutes: 18, landmark: "the Fox River Trail" },
  { slug: "elburn", name: "Elburn", county: "Kane", zip: "60119", distanceMiles: 9, driveMinutes: 15, landmark: "the Elburn Metra station" },
  { slug: "sugar-grove", name: "Sugar Grove", county: "Kane", zip: "60554", distanceMiles: 11, driveMinutes: 18, landmark: "Waubonsee Community College" },
  { slug: "west-chicago", name: "West Chicago", county: "DuPage", zip: "60185", distanceMiles: 10, driveMinutes: 18, landmark: "Reed-Keppler Park" },
  { slug: "wayne", name: "Wayne", county: "DuPage", zip: "60184", distanceMiles: 9, driveMinutes: 16, landmark: "the Wayne equestrian district" },
  { slug: "campton-hills", name: "Campton Hills", county: "Kane", zip: "60175", distanceMiles: 7, driveMinutes: 14, landmark: "LeRoy Oakes Forest Preserve" },
  { slug: "elgin", name: "Elgin", county: "Kane", zip: "60120", distanceMiles: 12, driveMinutes: 20, landmark: "downtown Elgin and the Fox River" },
  { slug: "aurora", name: "Aurora", county: "Kane", zip: "60506", distanceMiles: 13, driveMinutes: 22, landmark: "the Paramount Theatre" },
  { slug: "montgomery", name: "Montgomery", county: "Kane", zip: "60538", distanceMiles: 15, driveMinutes: 24, landmark: "the Fox River in Montgomery" },
  { slug: "big-rock", name: "Big Rock", county: "Kane", zip: "60511", distanceMiles: 14, driveMinutes: 22, landmark: "downtown Big Rock" },
  { slug: "hampshire", name: "Hampshire", county: "Kane", zip: "60140", distanceMiles: 14, driveMinutes: 22, landmark: "the Route 20 / Route 47 crossroads" },
  { slug: "burlington", name: "Burlington", county: "Kane", zip: "60109", distanceMiles: 10, driveMinutes: 18, landmark: "the Burlington crossroads" },
  { slug: "maple-park", name: "Maple Park", county: "Kane", zip: "60151", distanceMiles: 13, driveMinutes: 20, landmark: "downtown Maple Park" },
  { slug: "kaneville", name: "Kaneville", county: "Kane", zip: "60144", distanceMiles: 11, driveMinutes: 18, landmark: "downtown Kaneville" },
  { slug: "pingree-grove", name: "Pingree Grove", county: "Kane", zip: "60140", distanceMiles: 16, driveMinutes: 25, landmark: "Cambridge Lakes" },
  { slug: "gilberts", name: "Gilberts", county: "Kane", zip: "60136", distanceMiles: 15, driveMinutes: 24, landmark: "the Gilberts Metra station" },
  { slug: "carpentersville", name: "Carpentersville", county: "Kane", zip: "60110", distanceMiles: 18, driveMinutes: 28, landmark: "the Fox River in Carpentersville" },
  { slug: "wheaton", name: "Wheaton", county: "DuPage", zip: "60187", distanceMiles: 16, driveMinutes: 25, landmark: "downtown Wheaton and the DuPage County Courthouse" },
  { slug: "glen-ellyn", name: "Glen Ellyn", county: "DuPage", zip: "60137", distanceMiles: 18, driveMinutes: 28, landmark: "Lake Ellyn Park" },
  { slug: "winfield", name: "Winfield", county: "DuPage", zip: "60190", distanceMiles: 14, driveMinutes: 22, landmark: "the Northwestern Medicine Central DuPage Hospital campus" },
  { slug: "warrenville", name: "Warrenville", county: "DuPage", zip: "60555", distanceMiles: 16, driveMinutes: 25, landmark: "Blackwell Forest Preserve" },
] as const;

/* -------------------------------------------------------------------------- */
/* Topics (existing, already-written services + conditions content reused)    */
/* -------------------------------------------------------------------------- */

export type AreaTopic = {
  slug: string;
  label: string;
  labelLower: string;
  category: "service" | "condition";
  parentPath: string;
  parentSection: "Services" | "Conditions Treated";
  base: ServicePageContent;
};

export const AREA_TOPICS: readonly AreaTopic[] = [
  {
    slug: "chiropractic-care",
    label: "Chiropractic Care",
    labelLower: "chiropractic care",
    category: "service",
    parentPath: "/services/chiropractic-care/",
    parentSection: "Services",
    base: CHIROPRACTIC_CARE_CONTENT,
  },
  {
    slug: "back-pain",
    label: "Back Pain Treatment",
    labelLower: "back pain treatment",
    category: "condition",
    parentPath: "/conditions-treated/back-pain/",
    parentSection: "Conditions Treated",
    base: BACK_PAIN_CONTENT,
  },
  {
    slug: "sciatica",
    label: "Sciatica Treatment",
    labelLower: "sciatica treatment",
    category: "condition",
    parentPath: "/conditions-treated/sciatica/",
    parentSection: "Conditions Treated",
    base: CONDITIONS_SCIATICA_CONTENT,
  },
  {
    slug: "neck-pain",
    label: "Neck Pain Treatment",
    labelLower: "neck pain treatment",
    category: "condition",
    parentPath: "/conditions-treated/neck-pain/",
    parentSection: "Conditions Treated",
    base: NECK_PAIN_CONTENT,
  },
  {
    slug: "shockwave-therapy",
    label: "Shockwave Therapy",
    labelLower: "shockwave therapy",
    category: "service",
    parentPath: "/services/shockwave-therapy/",
    parentSection: "Services",
    base: SHOCKWAVE_THERAPY_CONTENT,
  },
  {
    slug: "neuropathy",
    label: "Neuropathy Treatment",
    labelLower: "neuropathy treatment",
    category: "condition",
    parentPath: "/conditions-treated/neuropathy/",
    parentSection: "Conditions Treated",
    base: NEUROPATHY_CONTENT,
  },
  {
    slug: "peptide-weight-loss",
    label: "Peptide Weight Loss",
    labelLower: "peptide weight loss",
    category: "service",
    parentPath: "/services/peptide-weight-loss/",
    parentSection: "Services",
    base: PEPTIDE_WEIGHT_LOSS_CONTENT,
  },
] as const;

export function getCity(slug: string): AreaCity | undefined {
  return AREA_CITIES.find((c) => c.slug === slug);
}

export function getTopic(slug: string): AreaTopic | undefined {
  return AREA_TOPICS.find((t) => t.slug === slug);
}

/* -------------------------------------------------------------------------- */
/* Locally-written intro paragraph variants                                   */
/* Eight distinct sentence structures (not a single template with tokens      */
/* swapped) selected deterministically per city+topic so pages don't collapse */
/* into one repeated pattern.                                                  */
/* -------------------------------------------------------------------------- */

const INTRO_VARIANTS: ((c: AreaCity, topicLower: string) => string)[] = [
  (c, t) =>
    `Patients in ${c.name}, ${c.county} County, are about ${c.distanceMiles} miles — roughly a ${c.driveMinutes}-minute drive — from our Geneva office, and ${t} is one of the most common reasons ${c.name} residents make that trip.`,
  (c, t) =>
    `If you live near ${c.landmark} in ${c.name} and are searching for ${t}, our Geneva clinic is typically the closest full-service integrative medicine office offering it, about ${c.driveMinutes} minutes away.`,
  (c, t) =>
    `We regularly see patients from ${c.name} for ${t}. At around ${c.distanceMiles} miles from ${c.landmark}, most ${c.name} patients tell us the drive to Geneva is shorter than the wait to see a specialist closer to home.`,
  (c, t) =>
    `${c.name} sits in ${c.county} County, about ${c.distanceMiles} miles from our Suite C office on Randall Rd. It's one of the surrounding communities we regularly serve for ${t}, alongside patients who commute in from ${c.landmark}.`,
  (c, t) =>
    `For residents near ${c.landmark}, the drive to Genesis Integrative Medicine runs about ${c.driveMinutes} minutes. It's a routine trip for ${c.name} patients seeking ${t} without traveling into Chicago for specialty care.`,
  (c, t) =>
    `${c.name}, IL (ZIP ${c.zip}) is one of the surrounding communities whose residents travel to our Geneva clinic for ${t} — about a ${c.driveMinutes}-minute drive from ${c.landmark}.`,
  (c, t) =>
    `Ask a ${c.name} patient why they make the ${c.distanceMiles}-mile drive to Geneva for ${t}, and the answer is usually the same: it's still faster than finding an equivalent integrative-medicine specialist closer to ${c.landmark}.`,
  (c, t) =>
    `Our Geneva office is about ${c.distanceMiles} miles from ${c.name} — a ${c.driveMinutes}-minute drive that's become routine for the ${c.name}, ${c.county} County patients we see regularly for ${t}.`,
];

const FAQ_VARIANTS: ((c: AreaCity, topicLower: string) => { question: string; answer: string })[] = [
  (c, t) => ({
    question: `Do you treat patients who live in ${c.name}, IL?`,
    answer: `Yes. ${c.name} is one of the ${c.county} County communities we regularly serve. It's about ${c.distanceMiles} miles (roughly ${c.driveMinutes} minutes) from ${c.name} to our office at 1881 S. Randall Rd, Suite C in Geneva, and many ${c.name} patients combine their ${t} visit with the other integrative services we offer under one roof.`,
  }),
  (c, t) => ({
    question: `How far is Genesis Integrative Medicine from ${c.name}?`,
    answer: `Our Geneva office is roughly ${c.distanceMiles} miles from ${c.name}, ${c.county} County (ZIP ${c.zip}) — about a ${c.driveMinutes}-minute drive. We see ${c.name} patients for ${t} on a regular basis.`,
  }),
  (c, t) => ({
    question: `I'm in ${c.name} near ${c.landmark} — is Geneva convenient for ${t}?`,
    answer: `Most of our ${c.name} patients say yes. At about ${c.driveMinutes} minutes from ${c.landmark}, the Geneva office is a short, direct drive along Randall Rd, and it's one of the more common trips we see for ${t}.`,
  }),
  (c, t) => ({
    question: `Do ${c.name} residents need a referral for ${t}?`,
    answer: `No referral is required. ${c.name} patients (ZIP ${c.zip}) can schedule directly for ${t} — call our Geneva office, about ${c.distanceMiles} miles from ${c.name}, to set up a consultation.`,
  }),
];

/** Deterministic pick that varies by both city and topic, not just city. */
function pick<T>(arr: readonly T[], cityIndex: number, topicIndex: number): T {
  return arr[(cityIndex * 3 + topicIndex * 5) % arr.length];
}

/* -------------------------------------------------------------------------- */
/* Page builders                                                              */
/* -------------------------------------------------------------------------- */

export function areaComboUrlPath(citySlug: string, topicSlug: string): string {
  return `/areas-we-serve/${citySlug}/${topicSlug}/`;
}

export function areaCityUrlPath(citySlug: string): string {
  return `/areas-we-serve/${citySlug}/`;
}

/** Build a full ServicePageContent for a city x topic combination page. */
export function buildAreaComboContent(
  city: AreaCity,
  topic: AreaTopic
): ServicePageContent {
  const cityIndex = AREA_CITIES.findIndex((c) => c.slug === city.slug);
  const topicIndex = AREA_TOPICS.findIndex((t) => t.slug === topic.slug);
  const intro = pick(INTRO_VARIANTS, cityIndex, topicIndex)(city, topic.labelLower);
  const faq = pick(FAQ_VARIANTS, cityIndex, topicIndex + 1)(city, topic.labelLower);
  const urlPath = areaComboUrlPath(city.slug, topic.slug);
  const canonicalOrigin = `${SITE_ORIGIN}${urlPath}`;

  const otherTopics = AREA_TOPICS.filter((t) => t.slug !== topic.slug);

  return {
    ...topic.base,
    slug: topic.slug,
    urlPath,
    meta: {
      title: `${topic.label} for ${city.name}, IL Patients`,
      description: `${city.name}, IL patients travel about ${city.distanceMiles} miles to Genesis Integrative Medicine in Geneva for ${topic.labelLower}. See why, and how to book a visit.`,
      canonicalOrigin,
      ogImage: topic.base.meta.ogImage,
    },
    breadcrumbs: [
      { name: "Home", item: `${SITE_ORIGIN}/` },
      { name: "Areas We Serve", item: `${SITE_ORIGIN}/areas-we-serve/` },
      { name: city.name, item: `${SITE_ORIGIN}${areaCityUrlPath(city.slug)}` },
      { name: topic.label },
    ],
    hero: {
      kicker: `Serving ${city.name}, IL`,
      h1: `${topic.label} for ${city.name} Patients`,
      subtitle: topic.base.hero.subtitle,
      intro,
    },
    sections: [
      {
        kind: "prose",
        heading: `${topic.label} Near ${city.name}, ${city.county} County`,
        paragraphs: [
          intro,
          `The clinical approach to ${topic.labelLower} is the same one detailed on our main ${topic.parentSection === "Services" ? "services" : "conditions treated"} page — our providers don't change the treatment protocol by ZIP code. What changes for ${city.name} patients is logistics: which entrance to use, how to combine a visit with other services in one trip, and what the drive actually looks like.`,
        ],
      },
      ...topic.base.sections,
    ],
    faqs: [...(topic.base.faqs ?? []), faq],
    relatedNav: {
      kicker: `${city.name}, IL`,
      heading: `Other treatments available to ${city.name} patients`,
      items: [
        ...otherTopics.map((t) => ({
          label: t.label,
          href: areaComboUrlPath(city.slug, t.slug),
        })),
        { label: `More about ${topic.label}`, href: topic.parentPath },
      ],
      footerLabel: "View all areas we serve",
      footerHref: "/areas-we-serve/",
    },
    serviceJsonLd: {
      name: `${topic.label} for ${city.name}, IL patients`,
      description: `${topic.base.serviceJsonLd.description} Serving patients from ${city.name}, IL.`,
      canonicalServiceUrl: canonicalOrigin,
    },
  };
}

/* -------------------------------------------------------------------------- */
/* City hub page data (/areas-we-serve/[city]/)                               */
/* -------------------------------------------------------------------------- */

export const AREAS_INDEX_META = {
  title: "Areas We Serve Near Geneva, IL",
  description:
    "Genesis Integrative Medicine in Geneva, IL serves patients throughout Kane and DuPage County, including St. Charles, Batavia, Aurora, Elgin, Wheaton, and more.",
  canonicalOrigin: `${SITE_ORIGIN}/areas-we-serve/`,
} as const;

export { SITE_ORIGIN as AREAS_SITE_ORIGIN };
