import Head from "next/head";
import { buildFaqPageSchema, type FaqItem } from "@/lib/seo/schema";

export interface BlogSeoHeadProps {
  /** Comma-separated meta keywords for the page. */
  keywords?: string;
  /** FAQ items rendered as FAQPage JSON-LD. */
  faqItems?: FaqItem[];
  /** Additional JSON-LD objects (ItemList, etc.). */
  extraSchemas?: object[];
}

/**
 * Page-level SEO extras for blog posts. Global title, description, OG tags,
 * canonical URL, BlogPosting, and breadcrumb schema are handled in _app.tsx.
 */
export default function BlogSeoHead({
  keywords,
  faqItems,
  extraSchemas = [],
}: BlogSeoHeadProps) {
  const schemas: object[] = [
    ...(faqItems?.length ? [buildFaqPageSchema(faqItems)] : []),
    ...extraSchemas,
  ];

  if (!keywords && schemas.length === 0) {
    return null;
  }

  return (
    <Head>
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {schemas.map((schema, index) => (
        <script
          key={`blog-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
