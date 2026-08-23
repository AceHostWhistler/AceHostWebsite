import { Html, Head, Main, NextScript } from "next/document";
import { businessInfo } from "@/data/seo/business";
import { buildLocalBusinessSchema, buildWebsiteSchema } from "@/lib/seo/schema";

export default function Document() {
  const { geo } = businessInfo;
  const geoPosition = `${geo.latitude};${geo.longitude}`;

  return (
    <Html lang="en">
      <Head>
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" />

        {/* Favicon — canonical file in /favicons/ */}
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="UmTMmjHtW3Q_-Uzi8WXxrPgE2YBsv0RXCQuB_Y"
        />

        {/* Geo signals for local search */}
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Whistler" />
        <meta name="geo.position" content={geoPosition} />
        <meta name="ICBM" content={geoPosition} />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional metadata for search engines */}
        <meta name="application-name" content="AceHost Whistler" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* OpenGraph metadata for social sharing and search results */}
        <meta property="og:site_name" content="AceHost Whistler" />
        
        {/* Twitter Card defaults — per-page images set in _app SocialShareMeta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@acehost_whistler" />

        {/* Enable DNS prefetching */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
        <link rel="author" href="https://acehost.ca/our-story" />
        
        {/* Google Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocalBusinessSchema()),
          }}
        />
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
