import type { Metadata } from "next";

import ServicePageTemplate from "@/app/components/services/ServicePageTemplate";
import { IV_NUTRITION_CONTENT } from "@/app/lib/services-content";
import { buildServicePageJsonLd } from "@/app/components/services/service-jsonld";

export const metadata: Metadata = {
  title: IV_NUTRITION_CONTENT.meta.title,
  description: IV_NUTRITION_CONTENT.meta.description,
  alternates: { canonical: IV_NUTRITION_CONTENT.meta.canonicalOrigin },
  openGraph: {
    type: "article",
    title: IV_NUTRITION_CONTENT.meta.title,
    description: IV_NUTRITION_CONTENT.meta.description,
    url: IV_NUTRITION_CONTENT.meta.canonicalOrigin,
    siteName: "Genesis Integrative Medicine",
    images: [
      {
        url: IV_NUTRITION_CONTENT.meta.ogImage,
        width: 340,
        height: 340,
        type: "image/webp",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: IV_NUTRITION_CONTENT.meta.title,
    description: IV_NUTRITION_CONTENT.meta.description,
    images: [IV_NUTRITION_CONTENT.meta.ogImage],
  },
};

export default function IvNutritionPage() {
  // Page is structured as prose (single H2 "Q & A" wrapping the body). No formal FAQ block.
  const blocks = buildServicePageJsonLd(IV_NUTRITION_CONTENT, {
    datePublished: "2022-07-21T00:00:00+00:00",
    dateModified: "2026-04-10T02:52:38+00:00",
    faqEnabled: false,
  });
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <ServicePageTemplate content={IV_NUTRITION_CONTENT} />
    </>
  );
}
