import { BLOG_POSTS } from '@/app/lib/blog-content'
import { DEFAULT_COVER, DEFAULT_COVER_ALT, DEFAULT_CTA } from './config'
import type { BlogPostData } from './types'

/** Existing compiled/MDX posts win on slug collision with Ranked imports. */
export function getLocalBlogPosts(): BlogPostData[] {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.excerpt,
    h1: post.title,
    publishDate: post.date,
    intro: post.excerpt,
    coverImage: post.image || DEFAULT_COVER,
    coverAlt: post.image ? post.title : DEFAULT_COVER_ALT,
    sections: [{ heading: post.title, body: [post.excerpt] }],
    cta: DEFAULT_CTA,
  }))
}
