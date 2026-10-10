import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { allArticles } from "@/utils/blogArticles";
import {
  buildArticleSchema,
  buildBlogBreadcrumbSchema,
} from "@/lib/seo/schema";
import { businessInfo, SITE_URL } from "@/data/seo/business";
import { resolveSocialShare } from "@/lib/seo/resolveSocialShare";
import {
  isLogoShareImage,
  LOGO_SHARE_HEIGHT,
  LOGO_SHARE_WIDTH,
  shareImageMimeType,
  toAbsoluteImageUrl,
} from "@/lib/seo/socialShare";

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
  const pageSlug =
    typeof pageProps.slug === "string" ? pageProps.slug : undefined;
  const resolvedPath =
    pageSlug && router.pathname.includes("[slug]")
      ? router.pathname.replace("[slug]", pageSlug)
      : router.asPath || "/";
  const canonicalPath = getCanonicalPath(resolvedPath);
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const locales = router.locales || ["en"];
  const defaultLocale = router.defaultLocale || "en";

  const blogStructuredData = useMemo(() => {
    if (!canonicalPath.startsWith("/post/")) return null;
    const article = allArticles.find((entry) => entry.link === canonicalPath);
    if (!article) return null;

    const articleUrl = `${SITE_URL}${article.link}`;
    const breadcrumbTitle = article.headline ?? article.title;

    return {
      "@context": "https://schema.org",
      "@graph": [
        buildArticleSchema({
          title: article.title,
          headline: article.headline,
          description: article.description ?? article.title,
          url: articleUrl,
          image: article.coverImage,
          datePublished: article.publishedAt,
          dateModified: article.modifiedAt ?? article.publishedAt,
        }),
        buildBlogBreadcrumbSchema(breadcrumbTitle, articleUrl),
      ],
    };
  }, [canonicalPath]);

  const socialShare = useMemo(
    () => resolveSocialShare(resolvedPath, locales),
    [resolvedPath, locales]
  );
  const shareImageUrl = toAbsoluteImageUrl(socialShare.image);
  const ogTitle = socialShare.socialTitle ?? socialShare.title;
  const ogDescription = socialShare.socialDescription ?? socialShare.description;
  const twitterCard = isLogoShareImage(socialShare.image)
    ? "summary"
    : "summary_large_image";

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
        <title>{socialShare.title}</title>
        <meta name="description" content={socialShare.description} />
        <meta key="og:title" property="og:title" content={ogTitle} />
        <meta
          key="og:description"
          property="og:description"
          content={ogDescription}
        />
        <meta key="og:image" property="og:image" content={shareImageUrl} />
        <meta
          key="og:image:secure_url"
          property="og:image:secure_url"
          content={shareImageUrl}
        />
        <meta key="og:image:alt" property="og:image:alt" content={ogTitle} />
        <meta
          key="og:image:type"
          property="og:image:type"
          content={shareImageMimeType(socialShare.image)}
        />
        {isLogoShareImage(socialShare.image) ? (
          <>
            <meta
              key="og:image:width"
              property="og:image:width"
              content={String(LOGO_SHARE_WIDTH)}
            />
            <meta
              key="og:image:height"
              property="og:image:height"
              content={String(LOGO_SHARE_HEIGHT)}
            />
          </>
        ) : null}
        <link key="image_src" rel="image_src" href={shareImageUrl} />
        <meta
          key="og:type"
          property="og:type"
          content={socialShare.type ?? "website"}
        />
        {socialShare.type === "article" && socialShare.publishedAt ? (
          <meta
            property="article:published_time"
            content={socialShare.publishedAt}
          />
        ) : null}
        {socialShare.type === "article" && socialShare.modifiedAt ? (
          <meta
            property="article:modified_time"
            content={socialShare.modifiedAt}
          />
        ) : null}
        <meta key="twitter:card" name="twitter:card" content={twitterCard} />
        <meta key="twitter:title" name="twitter:title" content={ogTitle} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={ogDescription}
        />
        <meta key="twitter:image" name="twitter:image" content={shareImageUrl} />
        <meta
          key="twitter:image:alt"
          name="twitter:image:alt"
          content={ogTitle}
        />
        {blogStructuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(blogStructuredData),
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
