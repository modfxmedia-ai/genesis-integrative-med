import type { Metadata } from "next";

import BlogIndexView from "@/app/components/blog/BlogIndexView";
import {
  BLOG_INDEX_META,
  paginatedPosts,
  totalBlogPages,
} from "@/app/lib/blog-content";

const CANONICAL = BLOG_INDEX_META.canonicalOrigin;
const SITE_ORIGIN = "https://genesisintegrativemed.com";

export const metadata: Metadata = {
  title: BLOG_INDEX_META.title,
  description: BLOG_INDEX_META.description,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    title: BLOG_INDEX_META.title,
    description: BLOG_INDEX_META.description,
    url: CANONICAL,
    siteName: "Genesis Integrative Medicine",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_INDEX_META.title,
    description: BLOG_INDEX_META.description,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "Blog"],
        "@id": CANONICAL,
        url: CANONICAL,
        name: BLOG_INDEX_META.title,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        description: BLOG_INDEX_META.description,
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Blog" },
        ],
      },
    ],
  },
];

export default function BlogPage() {
  const posts = paginatedPosts(1);
  const totalPages = totalBlogPages();
  return (
    <>
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <BlogIndexView posts={posts} currentPage={1} totalPages={totalPages} />
    </>
  );
}
