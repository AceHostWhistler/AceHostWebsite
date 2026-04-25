import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://acehost.ca";

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

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:url" content={canonicalUrl} />
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
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
