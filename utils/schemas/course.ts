interface CourseParams {
  name: string
  description: string
  price?: number
  currency?: string
}

export const courseSchema = (params: CourseParams) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: params.name,
  description: params.description,
  provider: {
    "@type": "Organization",
    name: "SR Academy",
    url: "https://www.stevenriosfx.com",
  },
  ...(params.price && {
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: params.price,
      priceCurrency: params.currency || "USD",
    },
  }),
  educationalLevel: "Beginner to Advanced",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
  },
})