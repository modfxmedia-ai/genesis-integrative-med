import type { ServicePageContent } from "@/app/lib/services-content";

/**
 * Build the JSON-LD @graph + supplementary schema blocks for a service page.
 * Structure mirrors the live site exactly: WebPage, ImageObject, BreadcrumbList,
 * WebSite (main graph), plus separate Service and MedicalClinic blocks.
 */

const SITE_ORIGIN = "https://genesisintegrativemed.com";

const WEBSITE_NODE = {
  "@type": "WebSite",
  "@id": `${SITE_ORIGIN}/#website`,
  url: `${SITE_ORIGIN}/`,
  name: "Genesis Integrative Medicine",
  description: "Integrative Medical Office | Pain Management Clinic",
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/?s={search_term_string}`,
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
        valueName: "search_term_string",
      },
    },
  ],
  inLanguage: "en-US",
} as const;

const WEBSITE_SIMPLE = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Genesis Integrative Medicine",
  url: `${SITE_ORIGIN}/`,
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
} as const;

const MEDICAL_CLINIC = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Genesis Integrative Medicine",
  image: `${SITE_ORIGIN}/wp-content/uploads/2021/03/Genesis_Logo.png`,
  "@id": "",
  url: `${SITE_ORIGIN}/`,
  telephone: "630-283-6563",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1881 S. Randall Rd, Suite C",
    addressLocality: "Geneva, IL",
    addressRegion: "IL",
    postalCode: "60134",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Friday"],
      opens: "08:00",
      closes: "11:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "15:00",
      closes: "18:00",
    },
  ],
} as const;

/** Build the full JSON-LD block array for a service sub-page. */
export function buildServicePageJsonLd(
  content: ServicePageContent,
  opts: {
    datePublished?: string;
    dateModified?: string;
    faqEnabled?: boolean;
  } = {}
) {
  const pageUrl = content.meta.canonicalOrigin;
  const primaryImageId = `${pageUrl}#primaryimage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const graph: unknown[] = [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: content.meta.title,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      primaryImageOfPage: { "@id": primaryImageId },
      image: { "@id": primaryImageId },
      thumbnailUrl: content.meta.ogImage,
      datePublished: opts.datePublished ?? "2022-07-21T00:00:00+00:00",
      dateModified: opts.dateModified ?? "2026-04-09T00:00:00+00:00",
      description: content.meta.description,
      breadcrumb: { "@id": breadcrumbId },
      inLanguage: "en-US",
      potentialAction: [{ "@type": "ReadAction", target: [pageUrl] }],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": primaryImageId,
      url: content.meta.ogImage,
      contentUrl: content.meta.ogImage,
      width: 340,
      height: 340,
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: content.breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        ...(b.item ? { item: b.item } : {}),
      })),
    },
    WEBSITE_NODE,
  ];

  const serviceBlock = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.serviceJsonLd.name,
    url: content.serviceJsonLd.canonicalServiceUrl,
    description: content.serviceJsonLd.description,
    provider: {
      "@type": "MedicalClinic",
      name: "Genesis Integrative Medicine",
      url: `${SITE_ORIGIN}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1881 S. Randall Rd, Suite C",
        addressLocality: "Geneva",
        addressRegion: "IL",
        postalCode: "60134",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Geneva",
      containedInPlace: { "@type": "State", name: "IL" },
    },
  };

  const blocks: unknown[] = [
    { "@context": "https://schema.org", "@graph": graph },
    serviceBlock,
    WEBSITE_SIMPLE,
    MEDICAL_CLINIC,
  ];

  // Add FAQPage schema when the page has FAQs
  if (opts.faqEnabled && content.faqs && content.faqs.length > 0) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return blocks;
}

/** JSON-LD for the /services/ index. */
export function buildServicesIndexJsonLd(opts: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  datePublished: string;
  dateModified: string;
}) {
  const primaryImageId = `${opts.canonicalUrl}#primaryimage`;
  const breadcrumbId = `${opts.canonicalUrl}#breadcrumb`;

  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": opts.canonicalUrl,
          url: opts.canonicalUrl,
          name: opts.title,
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          primaryImageOfPage: { "@id": primaryImageId },
          image: { "@id": primaryImageId },
          thumbnailUrl: opts.ogImage,
          datePublished: opts.datePublished,
          dateModified: opts.dateModified,
          description: opts.description,
          breadcrumb: { "@id": breadcrumbId },
          inLanguage: "en-US",
          potentialAction: [{ "@type": "ReadAction", target: [opts.canonicalUrl] }],
        },
        {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": primaryImageId,
          url: opts.ogImage,
          contentUrl: opts.ogImage,
          width: 340,
          height: 340,
        },
        {
          "@type": "BreadcrumbList",
          "@id": breadcrumbId,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
            { "@type": "ListItem", position: 2, name: "Services" },
          ],
        },
        WEBSITE_NODE,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Integrative Medicine & Healthcare Services",
      url: opts.canonicalUrl,
      description:
        "Genesis Integrative Medicine offers a wide range of holistic, regenerative, and non-invasive medical services in Geneva, IL.",
      provider: {
        "@type": "MedicalClinic",
        name: "Genesis Integrative Medicine",
        url: `${SITE_ORIGIN}/`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Our Medical Services",
        itemListElement: [
          "Joint Pain Treatment",
          "Chiropractic Care",
          "Active Rehab",
          "PRP (Platelet-Rich Plasma) Therapy",
          "Peptide Weight Loss",
          "Regenerative Medicine",
          "Cold Laser Therapy",
          "Trigger Point Injections",
          "Peripheral Neuropathy Treatment",
          "Shockwave Therapy",
          "Allergy Testing",
          "ED Shockwave & Men's Wellness",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            url: opts.canonicalUrl,
          },
        })),
      },
    },
    WEBSITE_SIMPLE,
    MEDICAL_CLINIC,
  ];
}

/** JSON-LD for the /conditions-treated/ index. */
export function buildConditionsIndexJsonLd(opts: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  datePublished: string;
  dateModified: string;
}) {
  const primaryImageId = `${opts.canonicalUrl}#primaryimage`;
  const breadcrumbId = `${opts.canonicalUrl}#breadcrumb`;

  return [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": opts.canonicalUrl,
          url: opts.canonicalUrl,
          name: opts.title,
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          primaryImageOfPage: { "@id": primaryImageId },
          image: { "@id": primaryImageId },
          thumbnailUrl: opts.ogImage,
          datePublished: opts.datePublished,
          dateModified: opts.dateModified,
          description: opts.description,
          breadcrumb: { "@id": breadcrumbId },
          inLanguage: "en-US",
          potentialAction: [{ "@type": "ReadAction", target: [opts.canonicalUrl] }],
        },
        {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": primaryImageId,
          url: opts.ogImage,
          contentUrl: opts.ogImage,
          width: 340,
          height: 340,
        },
        {
          "@type": "BreadcrumbList",
          "@id": breadcrumbId,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
            { "@type": "ListItem", position: 2, name: "Conditions Treated" },
          ],
        },
        WEBSITE_NODE,
      ],
    },
    WEBSITE_SIMPLE,
    MEDICAL_CLINIC,
  ];
}
