import type { Metadata } from "next";
import { getBlogPosts } from "@/components/mdx/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import PostDate from "@/components/post-date";
import { CustomMDX } from "@/components/mdx/mdx";
import PostNav from "./post-nav";
import PageIllustration from "@/components/page-illustration";
import Newsletter from "@/components/newsletter";

const siteUrl = "https://www.stevenriosfx.com";

// ============================================
// 🔍 METADATA COMPLETA (SEO Optimizado)
// ============================================
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary, publishedAt, author } = post.metadata;
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${title} | SR Academy`,
    description: summary,
    
    alternates: {
      canonical: url,
    },
    
    openGraph: {
      type: "article",
      url,
      title,
      description: summary,
      publishedTime: publishedAt,
      modifiedTime: publishedAt,
      authors: author ? [author] : ['Steven Rios'], // ← FIX AQUÍ
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [`${siteUrl}/images/og-image.jpg`],
      creator: "@stevenriosfx",
    },
  };
}

// ============================================
// 📄 PÁGINA POST INDIVIDUAL
// ============================================
export default async function SinglePost(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  // ============================================
  // 🏷️ SCHEMA BLOGPOSTING (Rich Snippets)
  // ============================================
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.summary,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt, // Si tienes updatedAt, úsalo
    author: {
      "@type": "Person",
      name: post.metadata.author,
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "SR Academy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo-sr-academy-2026.svg`,
      },
    },
    image: [`${siteUrl}/images/og-image.jpg`],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  };

  // ============================================
  // 🍞 BREADCRUMB SCHEMA
  // ============================================
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.metadata.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <section className="relative">
      {/* ============================================ */}
      {/* 🏷️ JSON-LD SCHEMAS                           */}
      {/* ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-between pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Left content */}
          <div className="max-w-3xl">
            <article>
              {/* Section header */}
              <header className="pb-8">
                <div className="mb-6">
                  <Link
                    className="text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                    href="/blog"
                  >
                    <span className="tracking-normal text-blue-300">&lt;-</span>{" "}
                    Volver al blog
                  </Link>
                </div>
                <h1 className="mb-5 text-5xl font-bold">
                  {post.metadata.title}
                </h1>
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full"
                    src={post.metadata.authorImg}
                    width={32}
                    height={32}
                    alt={post.metadata.author}
                  />
                  <div className="text-sm text-gray-500">
                    <Link 
                      href="/about"
                      className="font-medium hover:text-blue-500 transition-colors"
                    >
                      {post.metadata.author}
                    </Link>
                    {" · "}
                    <span className="text-gray-700">
                      <PostDate dateString={post.metadata.publishedAt} />
                    </span>
                  </div>
                </div>
              </header>

              <div className="prose max-w-none text-gray-700 prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-gray-900 prose-strong:font-medium prose-strong:text-gray-900 prose-code:rounded prose-code:bg-transparent prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-900 prose-blockquote:xl:-ml-4">
                <CustomMDX source={post.content} />
              </div>

             {/* ============================================ */}
              {/* 🎯 CTA INTERNO                               */}
              {/* ============================================ */}
              <div className="mt-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  ¿Listo Para Dominar el Trading Profesional?
                </h3>
                <p className="text-gray-300 mb-6">
                  Únete a +2,000 traders que transformaron su operativa con metodología 
                  estructurada, psicología del trading y gestión de riesgo real.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {/* CTA Principal */}
                  <Link
                    href="/pricing"
                    className="btn group bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                  >
                    <span className="relative inline-flex items-center">
                      Ver Planes de SR Academy
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Link>

                  {/* CTA Secundario */}
                  <Link
                    href="/about"
                    className="btn bg-white text-gray-800 shadow hover:bg-gray-50"
                  >
                    Conocer a Steven Rios
                  </Link>
                </div>
              </div>
            </article>

            {/* Newsletter form */}
            <Newsletter />
          </div>

          {/* Right sidebar */}
          <PostNav />
        </div>
      </div>
    </section>
  );
}

// ============================================
// 🚀 GENERAR RUTAS ESTÁTICAS (SSG)
// ============================================
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
