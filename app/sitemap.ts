import type { MetadataRoute } from "next";

import { CONDITIONS_SUBNAV, SERVICES_SUBNAV } from "@/app/lib/site-config";
import { AREA_CITIES, AREA_TOPICS, areaCityUrlPath, areaComboUrlPath } from "@/app/lib/areas-we-serve-content";
import { postHref, totalBlogPages, pageHref } from "@/app/lib/blog-content";
import { BLOG_POST_SLUGS } from "@/app/lib/blog-post-bodies";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://genesisintegrativemed.com";

type Entry = MetadataRoute.Sitemap[number];

function url(
  path: string,
  changeFrequency: Entry["changeFrequency"],
  priority: number,
): Entry {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Entry[] = [
    url("/", "weekly", 1.0),
    url("/about-practice/", "monthly", 0.8),
    url("/about-practice/meet-the-staff/", "monthly", 0.6),
    url("/our-providers/", "monthly", 0.7),
    url("/services/", "monthly", 0.9),
    url("/conditions-treated/", "monthly", 0.9),
    url("/areas-we-serve/", "monthly", 0.8),
    url("/blog/", "weekly", 0.7),
    url("/book-now/", "monthly", 0.8),
    url("/contact/", "monthly", 0.7),
    url("/forms/", "monthly", 0.5),
    url("/testimonials/", "monthly", 0.6),
    url("/lipo-peptides-weight/", "monthly", 0.7),
    url("/our-terms/", "yearly", 0.2),
    url("/your-privacy/", "yearly", 0.2),
    url("/accessibility-statement/", "yearly", 0.2),
  ];

  const servicePages = SERVICES_SUBNAV.map((i) => url(i.href, "monthly", 0.85));
  const conditionPages = CONDITIONS_SUBNAV.map((i) => url(i.href, "monthly", 0.85));

  const areaCityPages = AREA_CITIES.map((city) =>
    url(areaCityUrlPath(city.slug), "monthly", 0.6),
  );
  const areaComboPages = AREA_CITIES.flatMap((city) =>
    AREA_TOPICS.map((topic) => url(areaComboUrlPath(city.slug, topic.slug), "monthly", 0.5)),
  );

  const blogPostPages = BLOG_POST_SLUGS.map((slug) => url(postHref(slug), "monthly", 0.6));
  const total = totalBlogPages();
  const blogPaginationPages: Entry[] = [];
  for (let page = 2; page <= total; page += 1) {
    blogPaginationPages.push(url(pageHref(page), "weekly", 0.4));
  }

  return [
    ...staticPages,
    ...servicePages,
    ...conditionPages,
    ...areaCityPages,
    ...areaComboPages,
    ...blogPostPages,
    ...blogPaginationPages,
  ];
}
