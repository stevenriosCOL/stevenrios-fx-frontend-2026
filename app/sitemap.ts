import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/components/mdx/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stevenriosfx.com'
  
  // ============================================
  // 📄 PÁGINAS ESTÁTICAS
  // ============================================
  const staticPages = [
    { route: '', priority: 1.0, changeFreq: 'weekly' as const },
    { route: '/about', priority: 0.9, changeFreq: 'monthly' as const },
    { route: '/pricing', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/courses', priority: 0.8, changeFreq: 'weekly' as const },
    { route: '/blog', priority: 0.8, changeFreq: 'daily' as const },
    { route: '/customers', priority: 0.7, changeFreq: 'monthly' as const },
    { route: '/documentation', priority: 0.7, changeFreq: 'weekly' as const },
    { route: '/support', priority: 0.6, changeFreq: 'monthly' as const },
    { route: '/signin', priority: 0.5, changeFreq: 'monthly' as const },
    { route: '/signup', priority: 0.5, changeFreq: 'monthly' as const },
  ].map(page => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }))

  // ============================================
  // 📝 POSTS DINÁMICOS DEL BLOG
  // ============================================
  const posts = getBlogPosts()
  const blogPosts = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPosts]
}