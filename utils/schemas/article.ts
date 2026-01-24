interface ArticleParams {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified: string
  image?: string
  section?: string
}

export const articleSchema = (params: ArticleParams) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: params.title,
  description: params.description,
  url: `https://www.stevenriosfx.com/${params.section || 'blog'}/${params.slug}`,
  datePublished: params.datePublished,
  dateModified: params.dateModified,
  author: {
    "@type": "Person",
    name: "Steven Rios",
    url: "https://www.stevenriosfx.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "SR Academy",
    logo: {
      "@type": "ImageObject",
      url: "https://www.stevenriosfx.com/images/logo-sr-academy-2026.svg",
    },
  },
  image: params.image || "https://www.stevenriosfx.com/images/og-image.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.stevenriosfx.com/${params.section || 'blog'}/${params.slug}`,
  },
})