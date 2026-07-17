import type { Metadata } from "next";

import TestimonialsPageView from "@/app/components/testimonials/TestimonialsPageView";

const CANONICAL = "https://genesisintegrativemed.com/testimonials/";
const SITE_ORIGIN = "https://genesisintegrativemed.com";

const TITLE = "Testimonials | Genesis Integrative Medicine";
const DESCRIPTION =
  "Over 200 five-star Google reviews from patients of Genesis Integrative Medicine in Geneva, IL. Read verified testimonials and share your own experience.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "Genesis Integrative Medicine",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": CANONICAL,
        url: CANONICAL,
        name: TITLE,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        description: DESCRIPTION,
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Testimonials" },
        ],
      },
    ],
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <TestimonialsPageView />
    </>
  );
}
