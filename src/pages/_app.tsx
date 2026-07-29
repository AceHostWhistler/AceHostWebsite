import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { allArticles } from "@/utils/blogArticles";
import { buildArticleSchema } from "@/lib/seo/schema";
import { businessInfo, SITE_URL } from "@/data/seo/business";

function getCanonicalPath(asPath: string): string {
  const [cleanPath] = asPath.split("#");
  const [pathWithoutQuery] = cleanPath.split("?");
  if (!pathWithoutQuery || pathWithoutQuery === "/") return "/";
  return pathWithoutQuery.endsWith("/")
    ? pathWithoutQuery.slice(0, -1)
    : pathWithoutQuery;
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalPath = getCanonicalPath(router.asPath || "/");
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const locales = router.locales || ["en"];
  const defaultLocale = router.defaultLocale || "en";

  const blogArticleSchema = useMemo(() => {
    if (!canonicalPath.startsWith("/post/")) return null;
    const article = allArticles.find((entry) => entry.link === canonicalPath);
    if (!article) return null;
    return buildArticleSchema({
      title: article.title,
      description: article.description ?? article.title,
      url: `${SITE_URL}${article.link}`,
      image: article.coverImage,
    });
  }, [canonicalPath]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:site" content={businessInfo.twitterHandle} />
        {locales.map((locale) => {
          const localizedPath =
            locale === defaultLocale
              ? canonicalPath
              : `/${locale}${canonicalPath === "/" ? "" : canonicalPath}`;
          return (
            <link
              key={`alternate-${locale}`}
              rel="alternate"
              hrefLang={locale}
              href={`${SITE_URL}${localizedPath}`}
            />
          );
        })}
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        {blogArticleSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(blogArticleSchema),
            }}
          />
        )}
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
