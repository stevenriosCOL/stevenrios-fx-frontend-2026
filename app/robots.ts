import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/signin', '/api/', '/dashboard/'],
    },
    sitemap: 'https://www.stevenriosfx.com/sitemap.xml',
  }
}